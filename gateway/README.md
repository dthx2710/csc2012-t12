# Installation via Docker
- Ensure DOCKER service is running
- Git clone this repository [csc2012-t12](https://github.com/dthx2710/csc2012-t12)
- Open terminal in this folder
- Run the following command in gateway directory
```
docker build -t gateway -f ./Dockerfile ../gateway
```
- Run the following command to start the container
```
docker run -d -p 8080:8080 --name gateway_docker gateway
```
- Run the following to ensure that service ```gateway_docker``` is running
```
docker ps
``` 
- Access service by visiting 
```
http://localhost:8080
```
