from fastapi import FastAPI
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

json_string = '''{
    "flug_1": {
        "benutzer_id": 1,
        "polyline": "LINESTRING(7.494929 46.443797,7.492911 46.441696,7.468163 46.437157,7.457305 46.440436)",
        "startplatz": "Metschstand(SW)",
        "landeplatz": "Lenk(Winter)",
        "biplace": null,
        "datum": "21. März 2023",
        "gleitschirm": "Synphonia",
        "bild_link": "./test",
        "wind": "12km/h",
        "temperatur": "17°C"
        
    },
    "flug_2": {
        "benutzer_id": 1,
        "polyline": "LINESTRING(7.494929 46.443797,7.492911 46.441696,7.468163 46.437157,7.457305 46.440436)",
        "startplatz": "Metschstand(SW)",
        "landeplatz": "Lenk(Winter)",
        "biplace": null,
        "datum": "21. März 2023",
        "gleitschirm": "Synphonia",
        "bild_link": "./test",
        "wind": "12km/h",
        "temperatur": "17°C"
    },
    "flug_2": {
        "benutzer_id": 1,
        "polyline": "LINESTRING(7.494929 46.443797,7.492911 46.441696,7.468163 46.437157,7.457305 46.440436)",
        "startplatz": "Metschstand(SW)",
        "landeplatz": "Lenk(Winter)",
        "biplace": null,
        "datum": "21. März 2023",
        "gleitschirm": "Synphonia",
        "bild_link": "./test",
        "wind": "12km/h",
        "temperatur": "17°C"
    },
    "flug_3": {
        "benutzer_id": 1,
        "polyline": "LINESTRING(7.494929 46.443797,7.492911 46.441696,7.468163 46.437157,7.457305 46.440436)",
        "startplatz": "Metschstand(SW)",
        "landeplatz": "Lenk(Winter)",
        "biplace": null,
        "datum": "21. März 2023",
        "gleitschirm": "Synphonia",
        "bild_link": "./test",
        "wind": "12km/h",
        "temperatur": "17°C"
    },
    "flug_4": {
        "benutzer_id": 1,
        "polyline": "LINESTRING(7.494929 46.443797,7.492911 46.441696,7.468163 46.437157,7.457305 46.440436)",
        "startplatz": "Metschstand(SW)",
        "landeplatz": "Lenk(Winter)",
        "biplace": null,
        "datum": "21. März 2023",
        "gleitschirm": "Synphonia",
        "bild_link": "./test",
        "wind": "12km/h",
        "temperatur": "17°C"
    }
}'''

@app.get("/")
async def root():
    return json.loads(json_string)