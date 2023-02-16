# Use an official Node runtime as a parent image
FROM node:16-alpine

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

# Install the serve package to serve the app
RUN npm install -g serve

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app using serve
CMD ["serve", "-s", "dist", "-l", "3000"]
