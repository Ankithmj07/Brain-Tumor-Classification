import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
import cv2
import tensorflow as tf
#from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tqdm import tqdm
import os
from sklearn.utils import shuffle
from sklearn.model_selection import train_test_split
from keras.applications import EfficientNetB0
from keras.callbacks import EarlyStopping, ReduceLROnPlateau, TensorBoard, ModelCheckpoint
from sklearn.metrics import classification_report,confusion_matrix
import ipywidgets as widgets
import io
from PIL import Image
from IPython.display import display,clear_output
from warnings import filterwarnings
import time


labels = ['Glioma','No Tumor','Meningioma','Pituitary']

image_size=150
    


class Predict:
    def predict_image(self,img):
        model=tf.keras.models.load_model('model_files\effnet.keras')
        img_data=np.array(img)
        prediction=model.predict(img_data)
        pred=np.argmax(prediction,axis=1)
        return labels[pred[0]]
    

objPredict=Predict()

