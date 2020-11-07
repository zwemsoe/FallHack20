from emojis import *
from PIL import Image, ImageDraw, ImageFilter
import requests
import random
from io import BytesIO
    
def getRandomEmojiPng():
    i = random.randint(0,len(EMOJIS)-1)
    res = requests.get('https://emojicdn.elk.sh/' + EMOJIS[i])
    if res.status_code == 200:
        return res.content
    else:
        print("Error! No image!")
    
def getManipulateImage():
    img = Image.open('faces.jpg')
    emo = Image.open(BytesIO(getRandomEmojiPng()))
    img.paste(emo, (100, 50), emo)
    img.save('test.jpg', quality=100)

getManipulateImage()