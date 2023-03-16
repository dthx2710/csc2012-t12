# Use an official Python runtime as a parent image
FROM python:bullseye

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 50052 available to the world outside this container
EXPOSE 50052

# Start the server
CMD ["python", "cv.py"]