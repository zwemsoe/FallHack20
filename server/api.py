
from flask import Flask, request
from PIL import Image
from face_detection import get_emotions
from image_manipulate import getManipulatedImage
import base64
from io import BytesIO
from base64 import b64encode
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/api/imageUpload', methods=['POST'])
@cross_origin()
def uploadImage():
    img_file = request.files["file"]
    mode = request.form["mode"]
    file_type = request.form["fileType"]
    if file_type == "jpg":
        file_type = "JPEG"
    print(mode)
    emotions_list = get_emotions(img_file)
    processed_img = getManipulatedImage(emotions_list, img_file, mode)
    if processed_img == "no_face":
        return processed_img   
    buffered = BytesIO()
    processed_img.save(buffered, format=file_type)
    processed_img_str = base64.b64encode(buffered.getvalue())
    return processed_img_str

@app.route('/', methods=['GET'])
@cross_origin()
def index():
    return "Index Page"

if __name__ == '__main__':
    app.run(host="0.0.0.0", threaded=True, port=5000)
