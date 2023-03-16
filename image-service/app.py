from concurrent import futures
import grpc
import os
from dotenv import load_dotenv
import image_service_pb2
import image_service_pb2_grpc

# Load environment variables from .env file
load_dotenv()


# Access environment variables
service_url = os.getenv("IMAGE_SERVICE_URL")
service_port = os.getenv("IMAGE_SERVICE_URL").split(":")[1]

paperDetected = False
plasticDetected = False
canDetected = False

class ImageServicer(image_service_pb2_grpc.ImageServicer):
    def Recycle(self, request, context):
        global paperDetected, plasticDetected, canDetected
        # print("Recycle function called: ", paperDetected, plasticDetected, canDetected)
        # call function to check whether the item is recycled and return the type
        if paperDetected:
            return image_service_pb2.RecycleResponse(status=True, type="paper")

        elif plasticDetected:
            return image_service_pb2.RecycleResponse(status=True, type="plastic")

        elif canDetected:
            return image_service_pb2.RecycleResponse(status=True, type="can")
        
        else:
            return image_service_pb2.RecycleResponse(status=False, type="nothing")

    

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    image_service_pb2_grpc.add_ImageServicer_to_server(ImageServicer(), server)
    print('Starting server. Listening on port ' + service_port)
    server.add_insecure_port(service_url)
    server.start()
    server.wait_for_termination()

def checkItem(paper, plastic, can):
    global paperDetected, plasticDetected, canDetected
    paperDetected = False
    plasticDetected = False
    canDetected = False

    if paper:
        paperDetected = True

    if plastic:
        plasticDetected = True

    if can:
        canDetected = True


if __name__ == '__main__':
    serve()
