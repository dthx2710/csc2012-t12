# Smart Recycling
CSC2012 T12 Project - Smart recycling with Cloud native microservices - decoupling language-agnostic API services with fail-safe redundancy and horizontal scalablility

## Team12 Members
Name | Student ID | Role | Github
--- | --- | --- | ---
**Dylan Tok Hong Xun** | 2101372 | gRPC Gateway & Backend Lead | [@dthx2710](https://github.com/dthx2710)
**Derick** | 2100689 | Frontend Developer | [@zyferis](https://github.com/zyferis)
**Yee Kit** | 2100649 | Frontend Lead | [@xKhronoz](https://github.com/xKhronoz)
**Xiang Hui** | 2101993 | Computer Vision Developer | [@XiangHui556](https://github.com/XiangHui556)
**Xun Thong** | 2102436 | Frontend Developer | [@xunthongkkkkkk](https://github.com/xunthongkkkkkk)
**Sing Thai** | 2102954 | Docker | [@singthaitan](https://github.com/singthaitan)

## Simple Startup Steps
1. Install nodejs, go, python
2. Start frontend, gateway, user-service and image-service (details below)
OR
2.1 Run images of the above following using Kubernetes

**Frontend**
- `cd frontend`
-   `npm i`
-   `npm run dev` or `npm run build > npm start`

**Gateway**
- `cd gateway`
- `go run main.go`

**user-service**
- `cd user-service`
- `npm i`
- `npm start`

**image-service**
- `cd image-service`
- `virtualenv & install req & run flask`
