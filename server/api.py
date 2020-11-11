
from flask import Flask, flash, request, jsonify
from PIL import Image
from face_detection import *
from image_manipulate import *
import base64
import io
from io import BytesIO
from flask_restful import Resource, Api
from base64 import b64encode
from json import dumps


app = Flask(__name__)



@app.route('/api/imageUpload/<mode>', methods=['POST'])
def uploadImage(mode):
    img_file = request.files["file"]
    emotions_list = get_emotions(img_file)
    processed_img = getManipulatedImage(emotions_list, img_file, mode)
    #processed_img = io.TextIOWrapper(processed_img)
    
    buffered = BytesIO()
    processed_img.save(buffered, format="JPEG")
    processed_img_str = base64.b64encode(buffered.getvalue())
    
    
    return processed_img_str



if __name__ == '__main__':
    app.run()
