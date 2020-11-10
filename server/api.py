
from flask import Flask, flash, request, jsonify
from PIL import Image
from face_detection import *
from image_manipulate import *
import base64
from io import BytesIO
from flask_restful import Resource, Api
from base64 import b64encode
from json import dumps
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://fallhackdb:fallhackdb@freecluster.yg7sy.mongodb.net/Test?retryWrites=true&w=majority"
mongo = PyMongo(app)


@app.route('/api/imageUpload', methods=['POST'])
def uploadImage():
    img_file = request.files["file"]
    mongo.save_file(img_file.filename, img_file)
    return img_file.filename


@app.route('/image/<name>', methods=['GET'])
def image(name):
    return mongo.send_file(name)


@app.route('/api/process/<mode>', methods=['POST'])
def processImage(mode):
    img = request.json['image']
    # processed_img = getManipulatedImage(emotions_list, img_url, mode)
    # print("processed_img")
    return 'ok'


if __name__ == '__main__':
    app.run()
