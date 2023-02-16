const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('path/to/your/proto/file.proto');
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const userProto = protoDescriptor.UserService;

const client = new userProto('localhost:50051', grpc.credentials.createInsecure());

function getUser(userId) {
  const request = { id: userId };
  client.getUser(request, (err, response) => {
    if (err) {
      console.error(err);
    } else {
      console.log(response);
    }
  });
}

// getUser('1234');
