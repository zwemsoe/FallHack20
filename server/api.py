from flask import Flask, flash, request
from flask_restful import Resource, Api
from face_detection import *
from image_manipulate import *

app = Flask(__name__)
api = Api(app)

class ImageProcessing(Resource):
    def post(self):
        image = request.files['image']
        print(image)
        #emotions = get_emotions(image)
        #img = getManipulatedImage(emotions, image)
        return {"Good": "All good!"}


api.add_resource(ImageProcessing, "/image")


if __name__ == '__main__':
    app.run()