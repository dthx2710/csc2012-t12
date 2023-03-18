# Use an official Python runtime as a parent image
FROM python:3.9-bullseye


# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install the dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg\
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

# Install any needed packages specified in requirements.txt
COPY requirements.txt /opt/app/requirements.txt
WORKDIR /opt/app
RUN pip3 install opencv-python-headless
RUN pip3 install -r requirements.txt
COPY . /opt/app


# Make port 50052 available to the world outside this container
EXPOSE 50052

# Start the server
CMD ["python", "--version"]
CMD ["python", "detect.py", "--weights", "psd.pt", "--no-download", "--source", "0", "--nosave", "--conf-thres", "0.5", "--device", "cpu"]
