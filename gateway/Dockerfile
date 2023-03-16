# Use a golang base image
FROM golang:1.17.5-alpine3.15

# Set the working directory
WORKDIR /src

# Copy go.mod and go.sum to the working directory
COPY . .

# Download Go module dependencies
RUN go mod download

# Build the application
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

# Expose the port on which the server will listen
EXPOSE 8080

# Start the server
CMD ["./main"]

