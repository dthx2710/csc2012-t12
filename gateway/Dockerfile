FROM golang:1.17-alpine AS builder

WORKDIR /app

# Install required dependencies
RUN apk add --no-cache git

# Copy the source code into the container
COPY . .

# Build the server executable
RUN go mod download
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

FROM alpine:latest

RUN apk --no-cache add ca-certificates

WORKDIR /app

# Copy the server executable built in the previous stage
COPY --from=builder /app/main .

# Copy frontend files into backend image
FROM node:16-alpine AS frontend

WORKDIR /app

COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci

COPY frontend .
RUN npm run build

# Copy built frontend files into backend image
FROM scratch
COPY --from=builder /gateway /gateway
COPY --from=frontend /app/build /frontend

EXPOSE 8080

# Start the server
CMD ["./main"]
