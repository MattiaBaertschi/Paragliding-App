from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import psycopg2

# connect to the Database
conn = psycopg2.connect("dbname=flugbuch user=postgres password=e3jf9sp_39")

# create cursor to execute database operations
cur = conn.cursor()

# execute querry
cur.execute("SELECT flug_id, benutzer_id, startplatz, landeplatz, biplace, datum, gleitschirm, registrationsnummer FROM flug WHERE flug_id = 1")
records = cur.fetchall()
cur.execute("SELECT (ST_AsText(polyline)) FROM flug WHERE flug_id = 1")
polyline = cur.fetchall()

print(records[0][0])
print(records[0][1])
print(records[0][2])
print(polyline[0][0])
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

class User(BaseModel):
    user: str
    pw: str

@app.get("/")
async def root():
    return records

# User-Login
@app.post("/login")
async def login(user: User):
    try:
        cur.execute(f"SELECT benutzer_id, benutzername, passwort FROM benutzer WHERE benutzername = '{user.user}'")
        rec = cur.fetchall()

        log = {
            'id': f"{rec[0][0]}",
            'username': f"{rec[0][1]}",
            'passwort': f"{rec[0][2]}"
        }

        if user.pw == log['passwort']:#log.password:
            print(log['id'])
            return log
        return "passwordwrong"
    except:
        return "usernotfound"

# Upload Photo
@app.post('/upload_photo')
async def upload_photo(file: UploadFile = File(...)):
    filename = file.filename
    with open(os.path.join('./data/image', filename), 'wb') as buffer:
        shutil.copyfileobj(file.file, buffer)
    return 'Photo uploaded successfully'


# Upload IGC
@app.post('/upload_igc')
async def upload_igc(file: UploadFile = File(...)):
    filename = file.filename
    with open(os.path.join('./data/uploads', filename), 'wb') as buffer:
        shutil.copyfileobj(file.file, buffer)
    return 'IGC file uploaded successfully'
