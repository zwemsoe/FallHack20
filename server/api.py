from flask import Flask, request

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def index():
    return 'Index'

@app.route('/api/custom', methods=['POST'])
def custom():
    print(request.json['newText'])
    return request.json['newText']
