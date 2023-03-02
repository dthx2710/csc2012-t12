protoc:
	protoc --proto_path=proto proto/*.proto --go_out=proto --go_opt=paths=source_relative
	protoc --proto_path=proto proto/*.proto --go-grpc_out=proto --go-grpc_opt=paths=source_relative
	protoc -I . --grpc-gateway_out . \
	--proto_path=proto \
	--grpc-gateway_opt paths=source_relative \
    --grpc-gateway_opt logtostderr=true \
    proto/*.proto

clean-proto:
	rm proto/*.go

install-gateway:
	$ go install \
    github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway \
    github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2 \
    google.golang.org/protobuf/cmd/protoc-gen-go \
    google.golang.org/grpc/cmd/protoc-gen-go-grpc

install-google-api-annotations:
	mkdir -p google/api
	curl https://raw.githubusercontent.com/googleapis/googleapis/master/google/api/annotations.proto -o google/api/annotations.proto
	curl https://raw.githubusercontent.com/googleapis/googleapis/master/google/api/field_behavior.proto -o google/api/field_behavior.proto
	curl https://raw.githubusercontent.com/googleapis/googleapis/master/google/api/http.proto -o google/api/http.proto
	curl https://raw.githubusercontent.com/googleapis/googleapis/master/google/api/httpbody.proto -o google/api/httpbody.proto