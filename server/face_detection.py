from azure.cognitiveservices.vision.face import FaceClient
from msrest.authentication import CognitiveServicesCredentials
import json, os, requests
import http.client, urllib.request, urllib.parse, urllib.error, base64
from image_manipulate import *
KEY = "9e52a3a05f2843b3a56ef3eec5653086"
ENDPOINT = "https://fallhackapi.cognitiveservices.azure.com/"
LOCATION = "westus2"


def get_rectangle(faceDictionary):
    """helper method to find coords"""
    rect = faceDictionary.face_rectangle
    left = rect.left
    top = rect.top
    right = left + rect.width
    bottom = top + rect.height
    
    return ((left, top), (right, bottom))


def get_emotions(image):
    """
    returns tuple of ((top left coords),(bottom right coords),emotion) for each face
    """
    list_of_emotions = []
    dict_of_emotions = {}
    face_client = FaceClient(ENDPOINT, CognitiveServicesCredentials(KEY))
    detected_faces = face_client.face.detect_with_url(url=image,return_face_attributes=["emotion"])
    

    for face in detected_faces:
        face_emotion = face.face_attributes.emotion
        
        dict_of_emotions['anger'] = face_emotion.anger
        dict_of_emotions['contempt'] = face_emotion.contempt
        dict_of_emotions['disgust'] = face_emotion.disgust
        dict_of_emotions['fear'] = face_emotion.fear
        dict_of_emotions['happiness'] = face_emotion.happiness
        dict_of_emotions['neutral'] = face_emotion.neutral
        dict_of_emotions['sadness'] = face_emotion.sadness
        dict_of_emotions['surprise'] = face_emotion.surprise
        
        coords = get_rectangle(face)
        biggest_emotion = max(dict_of_emotions, key = dict_of_emotions.get)
        face_state = (coords,biggest_emotion)
        list_of_emotions.append(face_state)

    return list_of_emotions


  


    


