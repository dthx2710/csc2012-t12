package main

import (
	"context"
	gw "csc2012-t12/gateway/proto"
	"flag"
	"fmt"
	"net/http"
	"strings"

	"github.com/golang/glog"
	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

type UserServer struct {
	gw.UnimplementedUserServer
}

// service endpoints
var (
	userEndpoint  = flag.String("user_endpoint", "localhost:50051", "endpoint of User Service")
	imageEndpoint = flag.String("image_endpoint", "localhost:50052", "endpoint of Image Service")
)

func newGateway(ctx context.Context, opts ...runtime.ServeMuxOption) (http.Handler, error) {
	mux := runtime.NewServeMux(opts...)
	dialOpts := []grpc.DialOption{grpc.WithTransportCredentials(insecure.NewCredentials())}
	err := gw.RegisterUserHandlerFromEndpoint(ctx, mux, *userEndpoint, dialOpts) // register user service
	if err != nil {
		return nil, err
	}
	err = gw.RegisterImageHandlerFromEndpoint(ctx, mux, *imageEndpoint, dialOpts) // register image service
	if err != nil {
		return nil, err
	}
	return mux, nil
}

// allowCORS allows Cross Origin Resoruce Sharing from any origin.
// Don't do this without consideration in production systems.
func allowCORS(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if origin := r.Header.Get("Origin"); origin != "" {
			w.Header().Set("Access-Control-Allow-Origin", origin)
			if r.Method == "OPTIONS" && r.Header.Get("Access-Control-Request-Method") != "" {
				preflightHandler(w, r)
				return
			}
		}
		h.ServeHTTP(w, r)
	})
}

func preflightHandler(w http.ResponseWriter, r *http.Request) {
	headers := []string{"Content-Type", "Accept"}
	w.Header().Set("Access-Control-Allow-Headers", strings.Join(headers, ","))
	methods := []string{"GET", "HEAD", "POST", "PUT", "DELETE"}
	w.Header().Set("Access-Control-Allow-Methods", strings.Join(methods, ","))
	glog.Infof("preflight request for %s", r.URL.Path)
	return
}

// Run starts a HTTP server and blocks forever if successful.
func Run(address string, opts ...runtime.ServeMuxOption) error {
	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	mux := http.NewServeMux()

	gw, err := newGateway(ctx, opts...)
	if err != nil {
		return err
	}
	mux.Handle("/", gw)

	return http.ListenAndServe(address, allowCORS(mux))
}

func main() {
	flag.Parse()
	defer glog.Flush()

	fmt.Printf("Starting HTTP/1.1 gateway on port 8080")
	// Start HTTP server (and proxy calls to gRPC server endpoint)
	if err := Run(":8080"); err != nil {
		glog.Fatal(err)
	}
}
