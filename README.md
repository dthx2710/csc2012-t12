# CSC2012 T12 Project
## Cloud Native and Computer Vision Approach to Recycling
Decoupling Language-Agnostic API Microservices with Fail-Safe Redundancy and Horizontal Scalablility

## Team12 Members
| Name                   | Student ID | Role                        | Github                                               |
| ---------------------- | ---------- | --------------------------- | ---------------------------------------------------- |
| **Dylan Tok Hong Xun** | 2101372    | gRPC Gateway & Backend Lead | [@dthx2710](https://github.com/dthx2710)             |
| **Derick**             | 2100689    | Frontend Developer          | [@zyferis](https://github.com/zyferis)               |
| **Yee Kit**            | 2100649    | Frontend Lead               | [@xKhronoz](https://github.com/xKhronoz)             |
| **XiangHui**          | 2101993    | Computer Vision Developer   | [@XiangHui556](https://github.com/XiangHui556)       |
| **Xun Thong**          | 2102436    | Frontend Developer          | [@xunthongkkkkkk](https://github.com/xunthongkkkkkk) |
| **Sing Thai**          | 2102954    | Docker                      | [@singthaitan](https://github.com/singthaitan)       |

## Introduction
This project offers a complete solution that enables users to earn reward points by recycling items. The prototype employs computer vision to detect the items via a physical web camera, and a machine learning model to classify them into various categories, such as plastic, paper, and cans. Users can view their profile, reward points, and recycled items, and redeem their points for items in the store.

## Implementation

The system is designed as a microservices architecture, with distinct services for the frontend, gateway, user-service, and image-service. ReactJS, gRPC, NodeJS, and Python are used to develop these services, respectively, and they are containerized with Docker and orchestrated with Docker-Compose.

Instead of Kubernetes, the project uses minikube to operate the services in a local Kubernetes cluster. To route the traffic to the services, NGINX Ingress Controller is utilized. Meanwhile, NGINX reverse proxy routes the traffic to the frontend and gateway. gRPC (HTTP/2) is employed for communication between services, and gRPC Gateway is used to expose the gRPC services as RESTful APIs. gRPC is advantageous because it is an efficient, open-source universal RPC framework that utilizes HTTP/2 for transportation and Protocol Buffers as the interface description language. This allows for generating client and server code in any language from a simple .proto file, which is also used to generate the RESTful APIs. The system uses a single source of truth for the API, and client code for the frontend and gateway can be generated from the same .proto file.

## Requirements:
- A machine running Windows or Linux operating system
- Webcam (for image-service computer vision feed)
- Docker
- Python 3.9 if you are on windows (to run the image-service locally)
- NodeJS, Go, Python if you want to run all services manually

**Note:** You will need to start the image-service manually if you are on Windows

## Directory:
- `./frontend` - Contains the frontend code for the web application
- `./gateway` - Contains the gRPC gateway code
- `./image-service` - Contains the image-service code
- `./user-service` - Contains the user-service code
- `docker-compose.yml` - Contains the docker-compose configuration for the services

## Quickstart Steps
1. Clone the repository
2. Configure the environment variables in the `route-map.env` file
3. In the `IMAGE_SERVICE_URL` variable, replace `image-service:50052` with your local IP address `{ip}:50052`,
   if you are running the image-service locally (Windows only)
   - e.g. `IMAGE_SERVICE_URL=192.168.1.142:50052`
4. Start Docker
5. Start the program with the following steps:
   - **Windows**:
      1.   `npm run init` (This will install the required dependencies)
      2.   `npm run build` (This will build the docker images for the frontend, gateway, user-service)
      3.   `npm run up` (This will start the frontend, gateway, user-service and image-service)
      Image-service will be started locally, and will create a window for your webcam feed
   - **Linux**:
      4. `npm run build-linux`
      5. `npm run up-linux`
      The image-service will be started in a docker container and will use your webcam feed
6. With this, the Docker-Compose Stack will be up and running
   -    Be mindful that the build time is relatively long
   -    The frontend will be available at `localhost` or wherever you are hosting/deploying this on (HTTP - port 80)
   -    The gateway will be available at `localhost:8080`, and acts as a internal proxy for the other api services on ports `50051` and `50052`
   -    We have an NGINX reverse proxy running on port `80` to route the traffic to the frontend and gateway

## Developer Additions

## Running the services manually
We recommend using Docker to run the services instead, but if you want to run the services manually, you can do so by following the steps below:
1. Install NodeJS, go, python
2. Start frontend, gateway, user-service and image-service individually in separate terminals
3. **Frontend**
   - `cd frontend`
   - `npm i`
   - `npm run build`
   - `npm start`
4. **Gateway**
   - `cd gateway`
   - `go run main.go`
5. **user-service**
   - `cd user-service`
   - `npm i`
   - `npm start`
6. **image-service**
   - `cd image-service`
   - `npm run init`
   - `npm start`

## Generating Protobuf files
The protobuf files are already generated, but if you want to generate them yourself, you can do so by following the steps below:
1. Install protoc, protoc-gen-go, protoc-gen-grpc-web
2. Find the proto files in the `proto` directory
3. Copy the proto files into the grpc gateway and services directory
4. For the gateway, you can simply run `make protoc` to generate the gateway files
5. For the user-service, you are not required to generate the files, just simply use them as .proto
6. For the image-service, you will need to generate the files using the following command:
   - `python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. image_service.proto`
7. After generating the files, you can delete the proto files in the grpc gateway and services directory if desired
This will generate the Protobuf files for gRPC communications

## Computer Vision Advanced Startup
If you want to use a different encoder for the image-service, you can look into `./image-service/package.json` and configure the parameters in the `cv` script. Example, using GPU instead of CPU for encoding (CUDA) or using a different webcam device.
If you want to change the model, you can look into `./image-service/models` to use a different model.
