## Installation via Docker
- Ensure DOCKER service is running
- Open terminal
- Run the following to build the docker image
```
docker build -t frontend .
```
- Run the following to start the docker for front end
``` 
docker run -d -p 80:80 --name frontend_docker frontend
```
- Run the following to ensure that service ```frontend_docker``` is running
```
docker ps
``` 
- Run app by visiting 
```
http://localhost:3000
```

## To Login and Update Profile
- Ensure Users.json is loading
- cd user-service
- Run $json-server --watch ./data/users.json --port 3001
