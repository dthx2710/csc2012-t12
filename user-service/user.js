const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const userDB = require("./data/users.json");

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
  const user = userDB.userData.find((user) => user.id === id);
  if (user) {
    return user;
  }
  return null;
}

function GetInfo(call, callback) {
  callback(null, userInfo(call.request.id));
}

function addReward(id, reward) {
  const user = userDB.userData.find((user) => user.id === id);
  if (user) {
    user.reward += reward;
    return true;
  }
  return false;
}

function GetReward(call, callback) {
  callback(null, addReward(call.request.id, call.request.reward));
}

function getServer() {
  const server = new grpc.Server();
  server.addService(userProto.User.service, {
    LoginUser: LoginUser,
    GetInfo: GetInfo,
    GetReward: GetReward,
  });
  return server;
}

const userServer = getServer();

userServer.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    userServer.start();
  }
);
