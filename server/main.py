from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import json
app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

json_string = '''
    {
    "flug_1": {
        "id": 1,
        "benutzer_id": 2,
        "polyline": [
            [8.6083, 46.9656], 
            [8.0795, 46.6716], 
            [9.8061, 46.5389], 
            [7.4482, 46.9368]
        ],
        "startplatz": "Biel Kinizie",
        "landeplatz": "Ligerz",
        "biplace": true,
        "datum": "04. Juni 2022",
        "gleitschirm": "Swing Mito",
        "bild_link": "./test1",
        "wind": "15km/h",
        "temperatur": "23°C"
    },
    "flug_2": {
        "id": 2,
        "benutzer_id": 2,
        "polyline": [
            [8.5647, 47.4235], 
            [9.2279, 47.1097], 
            [7.4370, 46.9503], 
            [7.5762, 46.5587]
        ],
        "startplatz": "Col de Planchamp (Carouge)",
        "landeplatz": "Villars-sous-Yens",
        "biplace": false,
        "datum": "21. Juli 2022",
        "gleitschirm": "Advance Alpha 6",
        "bild_link": "./test2",
        "wind": "10km/h",
        "temperatur": "28°C"
    },
    "flug_3": {
        "id": 3,
        "benutzer_id": 2,
        "polyline": [
            [7.2474, 47.1338], 
            [8.5127, 47.3889], 
            [7.4474, 46.9480], 
            [7.5909, 47.5614]
        ],
        "startplatz": "Rigi Kaltbad",
        "landeplatz": "Gersau",
        "biplace": true,
        "datum": "11. August 2022",
        "gleitschirm": "Ozone Alpina 3 light",
        "bild_link": "./test3",
        "wind": "20km/h",
        "temperatur": "19°C"
    },
    "flug_4": {
        "id": 4,
        "benutzer_id": 2,
        "polyline": [
           [7.4446, 46.9464], 
           [8.5348, 47.3833], 
           [7.4474, 46.9474], 
           [6.6294, 46.5187]
        ],
        "startplatz": "Le Soliat",
        "landeplatz": "Les Bregnets",
        "biplace": false,
        "datum": "24. September 2022",
        "gleitschirm": "Nova Mentor 6",
        "bild_link": "./test4",
        "wind": "5km/h",
        "temperatur": "12°C"
    },
    "flug_5": {
        "id": 5,
        "benutzer_id": 2,
        "polyline": [
            [9.1796, 46.4131], 
            [8.8816, 46.5667], 
            [8.7739, 46.2768], 
            [8.9566, 46.0081]
        ],
        "startplatz": "Zweisimmen Eggweid",
        "landeplatz": "Zweisimmen Bahnhof",
        "biplace": true,
        "datum": "05. Oktober 2022",
        "gleitschirm": "Skyman CrossAlps2",
        "bild_link": "./test5",
        "wind": "18km/h",
        "temperatur": "14°C"
    },
    "flug_6": {
        "id": 6,
        "benutzer_id": 2,
        "polyline": [
           [7.4506, 46.9674], 
           [7.5762, 46.5587], 
           [8.2250, 46.8724], 
           [8.1563, 47.1625]
        ],
        "startplatz": "Cimetta Cardada",
        "landeplatz": "Locarno Piazza Grande",
        "biplace": false,
        "datum": "28. Oktober 2022",
        "gleitschirm": "Triple Seven King",
        "bild_link": "./test6",
        "wind": "25km/h",
        "temperatur": "9°C"
    },
    "flug_7": {
        "id": 7,
        "benutzer_id": 2,
        "polyline": [
            [7.6546, 46.9304], 
            [8.5647, 47.4235], 
            [9.0479, 46.4095], 
            [7.8778, 46.5935]
        ],
        "startplatz": "Jaunpass",
        "landeplatz": "Plaffeien",
        "biplace": false,
        "datum": "02. November 2022",
        "gleitschirm": "Gin Explorer",
        "bild_link": "./test7",
        "wind": "13km/h",
        "temperatur": "5°C"
    }
}

'''


@app.get("/")
async def root():
    return json.loads(json_string)


@app.post("/uploadflight/")
async def create_upload_file(file: UploadFile = File(...)):
    return {"filename": file.filename}
