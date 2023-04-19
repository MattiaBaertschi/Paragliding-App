from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
import psycopg2
from utils.handle_igc import handle_igc
import numpy as np


# connect to the Database
conn = psycopg2.connect("dbname=flugbuch user=postgres password=e3jf9sp_39")

# create cursor to execute database operations
cur = conn.cursor()

# execute querry
cur.execute("SELECT polyline,flight_id, user_id, takeof, landing, biplace, date, glider FROM flight WHERE flight_id = 10")
records = cur.fetchall()
cur.execute("SELECT polyline FROM flight WHERE flight_id = 10")
polyline = cur.fetchall()

# print(records[0][0])
# print(records[0][1])
# print(records[0][2])
# print(polyline[0][0])
#print(records)

app = FastAPI()

# Alow the Frontent to connet to the API
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return records

# User-Login
@app.post("/login")
async def login(user, pw):
    try:
        cur.execute(f"SELECT benutzer_id, benutzername, passwort FROM benutzer WHERE benutzername = '{user}'")
        rec = cur.fetchall()

        log = {
            'id': f"{rec[0][0]}",
            'username': f"{rec[0][1]}",
            'passwort': f"{rec[0][2]}"
        }

        if pw == log['passwort']:#log.password:
            print(log['id'])
            return log
        return "passwordwrong"
    except:
        return "usernotfound"

# Upload Photo
@app.post('/upload_image')
async def upload_photo(file: UploadFile = File(...)):
    allowedFiles = {"image/jpeg", "image/png", "imgage/gif","image/tiff", "image/bmp", "video/webm"}
    if file.content_type in allowedFiles:
        filename = file.filename
        with open(os.path.join('./data/image', filename), 'wb') as buffer:
            shutil.copyfileobj(file.file, buffer)
        return 'Photo uploaded successfully'
    else:
        return 'wrongfiletype'

# Upload IGC
@app.post('/upload_igc')
async def upload_igc(file: UploadFile = File(...), user_id: str = Form(...)):
    name, extention = os.path.splitext(file.filename)
    if extention == '.igc':
        content = file.file.read().decode(encoding='latin-1')
        # extract data from igc with the handle_igc function
        try: 
            data = handle_igc(content, 20)
        except:
            # handle files wiht wrong structure
            return 'wrongfilestructure'
        date = data['date']
        filepath = os.path.join('./data/igc', f'{date}_{user_id}.igc')
        with open(filepath, 'w', encoding='latin-1') as f:
            content = content.replace('\r', '')
            f.write(content)
        
        coord = data['coord'].tolist()
        # store data in Database
        cur = conn.cursor()
        # Build the array string dynamically
        array_string = "ARRAY[" + ", ".join(["ARRAY" + str(x) for x in coord]) + "]"
        # Execute the insert statement with the array string
        cur.execute(f'''INSERT INTO flight(flight_name, user_id, comment, polyline, takeof, landing, biplace, date, img_link, glider, wind_kmh, temp_celsius)
            VALUES ('test_01', {user_id}, 'comment', {array_string}, '{data['takeoff']}', '{data['landing']}', 'biplace', '17-04-2023', 'img_link', 'glider', 20, 25)''')

        # Commit the transaction
        conn.commit()

        # Close the cursor and connection
        cur.close()

        return 'IGC uploaded successfully'
    else:
        return 'wrongfiletype'
