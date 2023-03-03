const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('proto/user-service.proto',
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
  
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const userProto = protoDescriptor.User;
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
