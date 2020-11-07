from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)


class ImageProcessing(Resource):
    def post(self,image_url):

        
        return {"image url": image_url}



api.add_resource(ImageProcessing, "/image/<string:image_url>")


if __name__ == "__main__":
    app.run()