# Brain Tumoe Classification

## Overview

This repository contains a complete end-to-end machine learning project for classifying Brain Tumors in MRI Images. aims to develop an advanced and accurate system for categorizing brain tumors based on medical imaging data. Leveraging the power of deep learning, this project employs state-of-the- art convolutional neural networks (CNNs) – EfficientNetB0 to enhance the classification accuracy and robustness.

## Dataset

The Dataset contains MRI data. The images are already split into Training and Testing folders. Each folder has four subfolders. These folders have MRIs of respective tumor classes.

Dataset link: <a href="https://drive.google.com/drive/folders/1i-_QdSriaEyyKsuMtQuAKoei7SPhwVcS?usp=drive_link">Click Here </a>

## Project Structure

```

.
├── datasets
│   ├── testing
│   ├── training
├── model_files
│   ├── __init__.py
│   ├── effnet.keras
│   ├── ml_model.py
├── static
│   ├── images
│   ├── script.js
│   ├── style.css
├── templates
│   ├── index.html
├── app.py
├── Brain_Tumor_Detection.ipynb
├── requirements.txt
├── README.md


```

- **Datasets :** Contains Data
- **Notebook :** Jupyter notebook for data exploration, feature engineering, and model training.
- **model_files :** Python source code for data preprocessing, feature engineering, model training, and utility functions and pre-trained Deep learning model (e.g., effnet.keras).
- **app.py :** A simple web application for deploying the trained model.
- **README.md :** Documentation for the project.

 ## Getting Started

1. Clone the repository:
 ```
    git clone https://github.com/Ankithmj07/Brain-Tumor-Classification.git
    cd Brain-Tumor-Classification
 ```

2. Install the required packages:
```
    pip install -r requirements.txt
```

3. Explore the Jupyter notebooks in the to understand the data and the steps taken in the project.

4. Run the Python scripts in the **'model_files'** directory to preprocess the data, perform feature engineering, and train the deep learning model.

5.  Explore the web application for model deployment.

## Model Deployment

The pre-trained model is stored in the **'models_files'** directory. You can use this model for predictions without retraining.


## Web Application

A simple web application has been created for deploying the trained model. To run the application, execute the following command:

```
python app.py
```

Visit http://localhost:8080 in your web browser to interact with the application.

## Feel free to contribute, report issues, or provide feedback. Happy coding!
