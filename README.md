# Smart Recycling
CSC2012 T12 Project - Smart recycling with Cloud native microservices - decoupling language-agnostic API services with fail-safe redundancy and horizontal scalablility

## Team12 Members
| Name                   | Student ID | Role                        | Github                                               |
| ---------------------- | ---------- | --------------------------- | ---------------------------------------------------- |
| **Dylan Tok Hong Xun** | 2101372    | gRPC Gateway & Backend Lead | [@dthx2710](https://github.com/dthx2710)             |
| **Derick**             | 2100689    | Frontend Developer          | [@zyferis](https://github.com/zyferis)               |
| **Yee Kit**            | 2100649    | Frontend Lead               | [@xKhronoz](https://github.com/xKhronoz)             |
| **XiangHui**          | 2101993    | Computer Vision Developer   | [@XiangHui556](https://github.com/XiangHui556)       |
| **Xun Thong**          | 2102436    | Frontend Developer          | [@xunthongkkkkkk](https://github.com/xunthongkkkkkk) |
| **Sing Thai**          | 2102954    | Docker                      | [@singthaitan](https://github.com/singthaitan)       |

## Quickstart Steps
1. Start the Docker-Compose Stack using `docker compose up`
   -    Docker will start building the images in a shared container if this is your first setup
   -    Be mindful that the build time is relatively long (~8mins for image-service, ~10mins total)
   -    This will start the frontend, gateway, user-service and image-service
   -    The frontend will be available at `localhost` (HTTP - port 80)
   -    The gateway will be available at `localhost:8080`, and acts as a internal proxy for the other api services on ports `50051` and `50052`

## Running the services manually
We recommend using Docker to run the services instead, but if you want to run the services manually, you can do so by following the steps below:
1. Install nodejs, go, python
2. Start frontend, gateway, user-service and image-service individually:
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
   - `virtualenv & install req & run flask`
