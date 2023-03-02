package main

import (
	"context"
	gw "csc2012-t12/gateway/proto"
	"log"
	"net"
	"net/http"

	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"google.golang.org/grpc"
)

type UserServer struct {
	gw.UnimplementedUserServer
}

func (s *UserServer) GetInfo(ctx context.Context, req *gw.InfoRequest) (*gw.InfoResponse, error) {
	type User struct {
		Username string
		Name     string
		Points   int32
	}
	user := User{
		Username: "test",
		Name:     "test",
		Points:   100,
	}
	return &gw.InfoResponse{Username: user.Username, Name: user.Name, Points: user.Points}, nil
}

func main() {
	go func() {
		// mux
		mux := runtime.NewServeMux()
		// register
		gw.RegisterUserHandlerServer(context.Background(), mux, &UserServer{})
		// http server
		log.Fatalln(http.ListenAndServe(":8081", mux))
	}()

	listen, err := net.Listen("tcp", ":8080")
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}

	grpcServer := grpc.NewServer()
	gw.RegisterUserServer(grpcServer, &UserServer{})
	err = grpcServer.Serve(listen)
	if err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

}
