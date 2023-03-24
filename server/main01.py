# Imports for API
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

# Impot psycopg2 to connet with the Postgres DB
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


@app.get("/")
async def root():
    return records

@app.get("/id")
async def user(user,pw):
    cur.execute("SELECT benutzername, passwort, benutzer_id FROM benutzer WHERE benutzername = 'amba999'")
    record = cur.fetchall()
    print(record)
    print(user)
    return record

@app.post("image")
async def image_upload(
    my_file: UploadFile(...)
    ):
    return "done"