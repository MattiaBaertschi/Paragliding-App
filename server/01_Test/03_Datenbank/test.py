import psycopg2
conn = psycopg2.connect("dbname=flugbuch user=postgres password=e3jf9sp_39")

# Cursor erstellen um Datenbank Operationen durchzuführen
cur = conn.cursor()

cur.execute(f'SELECT polyline FROM flight WHERE flight_id=2')


# Abfrage Resultate erhalten
records = cur.fetchall()

print(records[0][0])

# Commit the transaction
conn.commit()

# Close the cursor and connection
cur.close()
conn.close()