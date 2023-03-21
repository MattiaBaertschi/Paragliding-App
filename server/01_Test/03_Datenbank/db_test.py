import psycopg2

# Verbindungsaufbau zur Postgres Datenbank
conn = psycopg2.connect("dbname=flugbuch user=postgres password=e3jf9sp_39")

# Cursor erstellen um Datenbank Operationen durchzuführen
cur = conn.cursor()

# Abfrage aufsführen
#cur.execute("SELECT (ST_AsText(polyline)) from flug where flug_id = 1")
cur.execute("SELECT * from flug where flug_id = 1")

# Abfrage Resultate erhalten
records = cur.fetchall()



print(records)