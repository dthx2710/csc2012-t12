# Use an official Python runtime as a parent image
FROM python:bullseye

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Install the dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    libgl1-mesa-glx \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    libgl1-mesa-dev \
    libqt5widgets5 \
    libqt5gui5 \
    libqt5core5a \
    libxcb-xinerama0 \
    && rm -rf /var/lib/apt/lists/*

# Make port 50052 available to the world outside this container
EXPOSE 50052

# Start the server
CMD ["python", "detect.py", "--weights", "psd.pt", "--no-download", "--source", "0", "--nosave", "--conf-thres", "0.5", "--device", "cpu"]
