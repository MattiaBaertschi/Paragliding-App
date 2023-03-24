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

json_string = '''{"flug_1":{"id":1,"benutzer_id":2,"polyline":"LINESTRING(7.524357 46.602835,7.526642 46.600238,7.522304 46.598072,7.517975 46.595905)","startplatz":"Biel Kinizie","landeplatz":"Ligerz","biplace":true,"datum":"04. Juni 2022","gleitschirm":"Swing Mito","bild_link":"./test1","wind":"15km/h","temperatur":"23°C"},"flug_2":{"id":2,"benutzer_id":2,"polyline":"LINESTRING(7.474429 46.694111,7.477000 46.692183,7.479638 46.691086,7.482268 46.690236)","startplatz":"Col de Planchamp (Carouge)","landeplatz":"Villars-sous-Yens","biplace":false,"datum":"21. Juli 2022","gleitschirm":"Advance Alpha 6","bild_link":"./test2","wind":"10km/h","temperatur":"28°C"},"flug_3":{"id":3,"benutzer_id":2,"polyline":"LINESTRING(8.007018 46.825719,8.005721 46.823853,8.002447 46.821637,7.998630 46.819303)","startplatz":"Rigi Kaltbad","landeplatz":"Gersau","biplace":true,"datum":"11. August 2022","gleitschirm":"Ozone Alpina 3 light","bild_link":"./test3","wind":"20km/h","temperatur":"19°C"},"flug_4":{"id":4,"benutzer_id":2,"polyline":"LINESTRING(7.116912 46.846543,7.115103 46.844654,7.110252 46.842386,7.105294 46.840693)","startplatz":"Le Soliat","landeplatz":"Les Bregnets","biplace":false,"datum":"24. September 2022","gleitschirm":"Nova Mentor 6","bild_link":"./test4","wind":"5km/h","temperatur":"12°C"},"flug_5":{"id":5,"benutzer_id":2,"polyline":"LINESTRING(7.614550 46.375795,7.616046 46.375426,7.617299 46.374901,7.618139 46.374316)","startplatz":"Zweisimmen Eggweid","landeplatz":"Zweisimmen Bahnhof","biplace":true,"datum":"05. Oktober 2022","gleitschirm":"Skyman CrossAlps2","bild_link":"./test5","wind":"18km/h","temperatur":"14°C"},"flug_6":{"id":6,"benutzer_id":2,"polyline":"LINESTRING(8.376973 46.441067,8.379074 46.439769,8.381167 46.438474,8.383051 46.436830)","startplatz":"Cimetta Cardada","landeplatz":"Locarno Piazza Grande","biplace":false,"datum":"28. Oktober 2022","gleitschirm":"Triple Seven King","bild_link":"./test6","wind":"25km/h","temperatur":"9°C"},"flug_7":{"id":7,"benutzer_id":2,"polyline":"LINESTRING(7.684682 46.500452,7.686297 46.499646,7.688080 46.498865,7.689942 46.497959)","startplatz":"Jaunpass","landeplatz":"Plaffeien","biplace":false,"datum":"02. November 2022","gleitschirm":"Gin Explorer","bild_link":"./test7","wind":"13km/h","temperatur":"5°C"}}'''

@app.get("/")
async def root():
    return json.loads(json_string)

@app.post("/uploadflight/")
async def create_upload_file(file: UploadFile = File(...)):
    return {"filename": file.filename}
