# Use an official Node.js runtime as a parent image
FROM node:bullseye

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the server will listen on
EXPOSE 50051

# Start the server
CMD ["npm", "start"]
