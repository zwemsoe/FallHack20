from os
from flask import Flask, flash, request


from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)


class ImageProcessing(Resource):
    def post(self,image):
        

        
        return {"image": image}



api.add_resource(ImageProcessing, "/image/<string:image_url>")


if __name__ == "__main__":
    app.run()