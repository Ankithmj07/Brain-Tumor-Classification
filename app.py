from flask import Flask, request, render_template,jsonify
import base64
from PIL import Image
from io import BytesIO
import cv2
import numpy as np
from model_files.ml_model import objPredict

app = Flask(__name__)

@app.route('/',methods=['GET'])
def index():
    return render_template('index.html')

# Assuming your HTML form has a file input named 'file'
@app.route('/Detect', methods=['POST'])
def upload_file():
    file = request.files.get('image')
    if file:
        img_data = file.read()
        img = cv2.imdecode(np.frombuffer(img_data, np.uint8), -1)
        img = cv2.resize(img,(150, 150))
        img_array=np.array(img)
        img_array_re=img_array.reshape(1,150,150,3)
        print(type(img_array))
        prediction = objPredict.predict_image(img_array_re)
        return jsonify(prediction)
    else:
        return "No file uploaded"

if __name__ == '__main__':
    app.run(debug=True,port=8081)

#print(upload_file())