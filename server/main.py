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

startpage = '''
{
"flug_1": {
    "id": 1,
	"firstname": "Mattia", 
	"lastname": "Bärtschi",
	"comment": "es ischt ein huren schoener flug gesit",
	"flight_name": "MetschStand-Rotenbach",	
	"flighttime" : "01:24",
	"polyline": [[2600000, 1200000],
    [2625000, 1175000],
    [2675000, 1150000],
    [2700000, 1175000],
    [2650000, 1225000]],
	"takeoff": "Biel Kinizie",
	"landing": "Ligerz",
	"date": "04. Juni 2022",
	"img_link": "./test1",
	"wind": "15km/h",
	"temp": "23°C" 
    },
"flug_2": {
    "id": 2,
	"firstname": "Tim", 
	"lastname": "feltenene",
	"comment": "es ischt ein huren schöner flug gesit",
	"flight_name": "MetschStand-Rotenbach",	
	"flighttime" : "01:24",
	"polyline": [
            [9.1796, 46.4131], 
            [8.8816, 46.5667], 
            [8.7739, 46.2768], 
            [8.9566, 46.0081]
        ],
	"takeoff": "Biel Kinizie",
	"landing": "Ligerz",
	"date": "04. Juni 2022",
	"img_link": "./test1",
	"wind": "15km/h",
	"temp": "23°C"
    },
    "flug_3": {
    "id": 3,
	"firstname": "Tim", 
	"lastname": "feltenene",
	"comment": "es ischt ein huren schöner flug gesit",
	"flight_name": "MetschStand-Rotenbach",	
	"flighttime" : "01:24",
	"polyline": [
            [9.1796, 46.4131], 
            [8.8816, 46.5667], 
            [8.7739, 46.2768], 
            [8.9566, 46.0081]
        ],
	"takeoff": "Biel Kinizie",
	"landing": "Ligerz",
	"date": "04. Juni 2022",
	"img_link": "./test1",
	"wind": "15km/h",
	"temp": "23°C"
    },
    "flug_4": {
    "id": 4,
	"firstname": "Tim", 
	"lastname": "feltenene",
	"comment": "es ischt ein huren schöner flug gesit",
	"flight_name": "MetschStand-Rotenbach",	
	"flighttime" : "01:24",
	"polyline": [
            [9.1796, 46.4131], 
            [8.8816, 46.5667], 
            [8.7739, 46.2768], 
            [8.9566, 46.0081]
        ],
	"takeoff": "Biel Kinizie",
	"landing": "Ligerz",
	"date": "04. Juni 2022",
	"img_link": "./test1",
	"wind": "15km/h",
	"temp": "23°C"
    }
 }
'''

flights = '''
{
"flug_1": {
    "id": 1,
    "flight_name": "MetschStand-Rotenbach",
    "datum": "04. Juni 2022",
    "startplatz": "Biel Kinizie",
    "landeplatz": "Ligerz",
    "flighttime" : "01:24"
    },
"flug_2": {
    "id": 2,
    "flight_name": "MetschStand-Rotenbach",
    "datum": "04. Juni 2022",
    "startplatz": "Metsch",
    "landeplatz": "Rothenbach",
    "flighttime" : "00:10"
    }
}
'''
userprofile = '''
{
"flight_count": 3,
"airtime_total": 123.4,
"airtime_year": 21.5,
"user_img_path": "./bliblablub",
"username": "amba999",
"firstname": "Mattia",
"lastname": "Bärtschi",
"shv_nummer": "65465"
}
'''

flight_details = '''
{
"id": 1,
"flight_name": "MetschStand-Rotenbach",
"alt": [1205, 1207, 1209, 1207, 1205, 1203, 1205, 1207, 1210, 1212, 1210, 1208, 1206, 1208, 1210, 1212, 1214, 1212, 1210, 1208, 1206, 1204, 1206, 1208, 1211, 1213, 1215, 1217, 1215, 1213, 1211, 1213, 1215, 1218, 1220, 1218, 1216, 1214, 1216, 1218, 1220, 1218, 1216, 1214, 1212, 1214, 1216, 1218, 1220, 1218],
"agl": [1012, 1014, 1008, 1013, 1011, 1011, 1004, 1014, 1004, 1009, 1014, 1009, 1012, 1008, 1010, 1002, 1012, 1011, 1008, 1010, 1009, 1010, 1003, 1011, 1003, 1002, 1012, 1009, 1010, 1012, 1001, 1012, 1004, 1004, 1014, 1004, 1014, 1003, 1013, 1003, 1013, 1012, 1009, 1012, 1009, 1012, 1002, 1012, 1001, 1003, 1013, 1003, 1013],
"time_stamps": [   "09:23",    "09:24",    "09:25",    "09:26",   "09:27",   "09:28",   "09:29",   "09:30",   "09:31",   "09:32",   "09:33",   "09:34",   "09:35",   "09:36",   "09:37",   "09:38",   "09:39",   "09:40",   "09:41",   "09:42",   "09:43",   "09:44",   "09:45",   "09:46",   "09:47",   "09:48",   "09:49",   "09:50",   "09:51",   "09:52",   "09:53",   "09:54",   "09:55",   "09:56",   "09:57",   "09:58",   "09:59",   "10:00",   "10:01",   "10:02",   "10:03",   "10:04",   "10:05",   "10:06",   "10:07",   "10:08",   "10:09",   "10:10" ], 	
"takeofftime": "09:23",
"landingtime": "15:11",
"flighttime" : "01:24",
"user_id": 2,
"firstname": "Mattia",
"lastname": "Bärtschi",
"polyline": [
	[8.6083, 46.9656],
	[8.0795, 46.6716],
	[9.8061, 46.5389],
	[7.4482, 46.9368]
    ],
"takeoff": "Biel Kinizie",
"landing": "Ligerz",
"biplace": true,
"date": "04. Juni 2022",
"glider": "Swing Mito",
"img_link": "./test1",
"wind": "15km/h",
"temp": "23°C"
 }
'''

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

@app.get("/get_startpage")
async def root():
    return json.loads(startpage)

@app.get("/get_userprofile")
async def root():
    return json.loads(userprofile)

@app.get("/get_flights")
async def root():
    return json.loads(flights)

@app.get("/get_flight_details")
async def root():
    return json.loads(flight_details)

@app.post("/uploadflight/")
async def create_upload_file(file: UploadFile = File(...)):
    return {"filename": file.filename}
