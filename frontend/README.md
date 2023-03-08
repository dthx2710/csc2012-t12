## Installation via Docker
- Ensure DOCKER service is running
- Open terminal
- Run ```docker build -t frontend .```
- Run ``` docker run -d -p 3000:3000 --name frontend_docker frontend```
- Run ```docker ps``` to ensure that service ```frontend_docker``` is running
- Run app by visiting ```http://localhost:3000```
