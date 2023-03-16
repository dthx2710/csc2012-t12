# Use an official Node runtime as a parent image
FROM node:bullseye as builder

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app directory into the container
COPY . .

# Build the app for production with Vite
RUN npm run build

# # Install the serve package to serve the app
# RUN npm install -g serve

# Make port 3000 available to the world outside this container
EXPOSE 3000

# # Run the app using serve
# CMD ["serve", "-s", "dist", "-l", "3000"]

# Stage 2 : NGINX Setup
FROM nginx:latest

# Copy the nginx.conf file to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the frontend build files to the default Nginx document root
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]