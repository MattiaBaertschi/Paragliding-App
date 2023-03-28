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

json_string = '''{"flug_1":
    {"id":1,"benutzer_id":2,"polyline":[[9.5,42],[8.6,47.1],[8.6,47.3],[8.8,47.2]],"startplatz":"Biel Kinizie","landeplatz":"Ligerz","biplace":true,"datum":"04. Juni 2022","gleitschirm":"Swing Mito","bild_link":"./test1","wind":"15km/h","temperatur":"23°C"},
    "flug_2":{"id":2,"benutzer_id":2,"polyline":[[9.2, 46.8], [8.4, 47.1], [6.8, 46.5], [7.1, 46.9]],"startplatz":"Col de Planchamp (Carouge)","landeplatz":"Villars-sous-Yens","biplace":false,"datum":"21. Juli 2022","gleitschirm":"Advance Alpha 6","bild_link":"./test2","wind":"10km/h","temperatur":"28°C"},
    "flug_3":{"id":3,"benutzer_id":2,"polyline":[[41.8723,-87.6280],[29.9844,-95.3414],[33.9425,-118.4081],[18.4655,-66.1167],[40.6922,-74.1686],[43.6568,-79.3797]],"startplatz":"Rigi Kaltbad","landeplatz":"Gersau","biplace":true,"datum":"11. August 2022","gleitschirm":"Ozone Alpina 3 light","bild_link":"./test3","wind":"20km/h","temperatur":"19°C"},"flug_4":{"id":4,"benutzer_id":2,"polyline":[[35.5498,139.7798],[22.3193,114.1694],[33.9425,-118.4081],[37.7749,-122.4194],[47.6062,-122.3321]],"startplatz":"Le Soliat","landeplatz":"Les Bregnets","biplace":false,"datum":"24. September 2022","gleitschirm":"Nova Mentor 6","bild_link":"./test4","wind":"5km/h","temperatur":"12°C"},"flug_5":{"id":5,"benutzer_id":2,"polyline":[[40.6397,-73.7789],[37.7749,-122.4194],[33.9416,-118.4085],[34.0522,-118.2437],[19.4326,-99.1332]],"startplatz":"Zweisimmen Eggweid","landeplatz":"Zweisimmen Bahnhof","biplace":true,"datum":"05. Oktober 2022","gleitschirm":"Skyman CrossAlps2","bild_link":"./test5","wind":"18km/h","temperatur":"14°C"},"flug_6":{"id":6,"benutzer_id":2,"polyline":[[39.9042,116.4074],[51.5074,-0.1278],[40.7127,-74.0059]],"startplatz":"Cimetta Cardada","landeplatz":"Locarno Piazza Grande","biplace":false,"datum":"28. Oktober 2022","gleitschirm":"Triple Seven King","bild_link":"./test6","wind":"25km/h","temperatur":"9°C"},"flug_7":{"id":7,"benutzer_id":2,"polyline":[[35.6895,139.6917],[25.2769,55.2962],[38.7223,-9.1393],[51.5074,-0.1278]],"startplatz":"Jaunpass","landeplatz":"Plaffeien","biplace":false,"datum":"02. November 2022","gleitschirm":"Gin Explorer","bild_link":"./test7","wind":"13km/h","temperatur":"5°C"}}'''


@app.get("/")
async def root():
    return json.loads(json_string)


@app.post("/uploadflight/")
async def create_upload_file(file: UploadFile = File(...)):
    return {"filename": file.filename}
