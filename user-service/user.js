const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const fs = require("fs");

const packageDefinition = protoLoader.loadSync("proto/user-service.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const userProto = protoDescriptor.user_service;

function Login(username, password) {
  const userDB = require("./data/users.json");
  const user = userDB.userData.find((user) => user.username === username);
  if (user && user.password === password) {
    return user;
  }
  return null;
}

function LoginUser(call, callback) {
  callback(null, Login(call.request.username, call.request.password));
}

function userInfo(id) {
  const userDB = JSON.parse(fs.readFileSync("./data/users.json"));
  const user = userDB.userData.find((user) => user.id === id);
  if (user) {
    // rename lifetimePoints to lifetime_points for protobuf
    user.lifetime_points = user.lifetimePoints;
    user.lifetimePoints = undefined;
    return user;
  }
  return null;
}

function GetUser(call, callback) {
  callback(null, userInfo(call.request.id));
}

function addPoint(id, points_change) {
  const userDB = JSON.parse(fs.readFileSync("./data/users.json"));
  const user = userDB.userData.find((user) => user.id === id);
  if (user) {
    user.points += points_change;
    if (points_change > 0) {
      user.lifetimePoints += points_change;
    }
    // write back to file
    fs.writeFile("./data/users.json", JSON.stringify(userDB), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Changed ", points_change, " points for user ", user.id);
    });
    return true;
  }
  return false;
}

function GetPoint(call, callback) {
  callback(null, addPoint(call.request.id, call.request.points_change));
}

function updateUser(id, user) {
  const userDB = JSON.parse(fs.readFileSync("./data/users.json"));
  const { username, name, password } = user;
  const userIndex = userDB.userData.findIndex((user) => user.id === id);
  if (userIndex >= 0) {
    if (username) {
      userDB.userData[userIndex].username = username;
    }
    if (name) {
      userDB.userData[userIndex].name = name;
    }
    if (password) {
      userDB.userData[userIndex].password = password;
    }
    // write back to file
    fs.writeFile("./data/users.json", JSON.stringify(userDB), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Updated user ", userDB.userData[userIndex]);
    });
    return true;
  }
  return false;
}

function UpdateProfile(call, callback) {
  callback(null, updateUser(call.request.id, call.request));
}



function getServer() {
  const server = new grpc.Server();
  server.addService(userProto.User.service, {
    LoginUser: LoginUser,
    GetUser: GetUser,
    GetPoint: GetPoint,
    UpdateProfile: UpdateProfile,
  });
  return server;
}

const userServer = getServer();

userServer.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("User-service is listening on port 50051");
    userServer.start();
  }
);
