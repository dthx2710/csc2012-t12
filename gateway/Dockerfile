# Use a golang base image
FROM golang:bullseye

# Set the working directory
WORKDIR /app

# Copy go.mod and go.sum to the working directory
COPY ./src/go.mod ./src/go.sum ./

# Download Go module dependencies
RUN go mod download

# Copy the rest of the source code
COPY ./src .

# Build the application
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

# Expose the port on which the server will listen
EXPOSE 8080

# Start the server
CMD ["./main"]
