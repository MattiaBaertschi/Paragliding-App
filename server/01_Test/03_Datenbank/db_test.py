import psycopg2

# Verbindungsaufbau zur Postgres Datenbank
conn = psycopg2.connect("dbname=flugbuch user=postgres password=e3jf9sp_39")

# Cursor erstellen um Datenbank Operationen durchzuführen
cur = conn.cursor()

# Abfrage aufsführen
#cur.execute("SELECT (ST_AsText(polyline)) from flug where flug_id = 1")
#cur.execute("SELECT * from flight where flight_id = 1")

# Define the colums for an insert
colums = "()"

# Define the list of values to insert
values = [[2636906.03, 1128491.31], [2636920.2, 1128483.99], [2636934.37, 1128476.66], [2636948.54, 1128469.34], [2636962.69, 1128463.86], [2636978.15, 1128456.55], [2636993.59, 1128451.08], [2637010.33, 1128443.77], [2637025.77, 1128438.31], [2637042.49, 1128432.85], [2637059.22, 1128427.4], [2637074.65, 1128423.79]]

# Build the array string dynamically
array_string = "ARRAY[" + ", ".join(["ARRAY" + str(x) for x in values]) + "]"

# Execute the insert statement with the array string
cur.execute(f'''INSERT INTO flight(flight_name, user_id, comment, polyline, takeof, landing, biplace, date, img_link, glider, wind_kmh, temp_celsius)
    VALUES ('flight_name', 1, 'comment', {array_string}, 'takeof', 'landing', 'biplace', '17-04-2023', 'img_link', 'glider', 20, 25)''')

# Commit the transaction
conn.commit()

# Close the cursor and connection
cur.close()
conn.close()


cur.execute(f'SELECT polyline FROM flight WHERE flight_id=2')


# Abfrage Resultate erhalten
records = cur.fetchall()


