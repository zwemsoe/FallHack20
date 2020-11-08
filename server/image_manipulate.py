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
        
def getEmotionEmojiPng(mood):
    emoji = ''
    if mood == 'neutral':
        i = random.randint(0,len(NEUTRAL)-1)
        emoji = NEUTRAL[i]
    elif mood == 'anger':
        i = random.randint(0,len(ANGRY)-1)
        emoji = ANGRY[i]
        
    elif mood == 'disgust':
        i = random.randint(0,len(DISGUST)-1)
        emoji = DISGUST[i]
        
    elif mood == 'happiness':
        i = random.randint(0,len(HAPPINESS)-1)
        emoji = HAPPINESS[i]
        
    elif mood == 'contempt':
        i = random.randint(0,len(CONTEMPT)-1)
        emoji = CONTEMPT[i]
        
    elif mood == 'sadness':
        i = random.randint(0,len(SADNESS)-1)
        emoji = SADNESS[i]
        
    elif mood == 'surprise':
        i = random.randint(0,len(SURPRIRE)-1)
        emoji = SURPRIRE[i]
        
    else:
        i = random.randint(0,len(FEAR)-1)
        emoji = FEAR[i]
        
    res = requests.get('https://emojicdn.elk.sh/' + emoji)
    if res.status_code == 200:
        return res.content
    else:
        print("Error! No image!")
            
    
def getManipulatedImage(emotions):
    res = requests.get('http://www.historyplace.com/kennedy/president-family-portrait-closeup.jpg')
    img = Image.open(BytesIO(res.content))
    #emo = Image.open(BytesIO(getRandomEmojiPng()))
    print(emotions)
    for e in emotions:
        coords, mood = e
        emo_png = getEmotionEmojiPng(mood)
        emo = Image.open(BytesIO(emo_png))
        lt, rb = coords
        l, t = lt
        r, b = rb
        width = r-l
        height = b-t
        new_emo = emo.resize((width, height))   
        img.paste(new_emo, lt, new_emo)
        
    img.save('test.jpg', quality=100)
