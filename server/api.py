from flask import Flask, flash, request, jsonify
from PIL import Image
import base64
from io import BytesIO
from flask_restful import Resource, Api
from base64 import b64encode
from json import dumps

app = Flask(__name__)
#api = Api(app)

# class ImageProcessing(Resource):
#     def post(self):
#         print(request.data)
#         # img_strm = Image.open(file.stream)
#         # img_strm = img_strm.convert('RGB')
#         # buffered = BytesIO()
#         # img_strm.save(buffered, format="JPEG")
#         # img_str64 = base64.b64encode(file)
#         # img_str = img_str64.decode('utf-8')
#         # raw_data = {"image string": img_str}
#         # json_img_data = dumps(raw_data, indent=2)
#         # print("img_str64")       
#         # return json_img_data


# api.add_resource(ImageProcessing, "api/image")

@app.route('/api/imageUpload', methods=['POST'])
def getManipulatedImage():
    file = request.json["src"]
    img_strm = Image.open(file)
    img_strm = img_strm.convert('RGB')
    buffered = BytesIO()
    img_strm.save(buffered, format="JPEG")
    img_str64 = base64.b64encode(file)
    img_str = img_str64.decode('utf-8')
    print("OK")  
    raw_data = {"image string": img_str}
    print("OK")  
    json_img_data = dumps(raw_data, indent=2)
    print("OK")   
    return "ok"

if __name__ == '__main__':
    app.run()