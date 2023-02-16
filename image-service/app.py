from concurrent import futures
import grpc

import my_pb2
import my_pb2_grpc

class MyService(my_pb2_grpc.MyServiceServicer):
    def GetMyResponse(self, request, context):
        response = my_pb2.MyResponse()
        # Do some processing here to create response object
        return response

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    my_pb2_grpc.add_MyServiceServicer_to_server(MyService(), server)
    server.add_insecure_port('[::]:50052')
    server.start()
    server.wait_for_termination()

if __name__ == '__main__':
    serve()
