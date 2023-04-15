import fileinput
import re
from datetime import datetime
import transform
import rasterio
import numpy as np
from rasterio.crs import CRS

f = open('./01_Test/02_IGC_File/2023-03-03-XCT-PAE-01.igc','r',encoding='utf-8')

koord = []
times = []
altitude = []


B_Pattern = re.compile((r"^B(\d{6})(\d{2})(\d{5})(N|S)(\d{3})(\d{5})(E|W)(A|V)([0-9-]{5})(\d{5})(.*)$"))

def record(match):
    time = int(match[1])
    lat = int(match[2]) + (int(match[3])/60000)
    lon = int(match[5]) + (int(match[6])/60000)
    lat = lat if match[4] == 'N' else -lat
    lon = lon if match[7] == 'E' else -lon
    validity = match[8]
    palt = int(match[9])
    galt = int(match[10])
    rest = match[11]

    # Convert string to datetime object
    time_obj = datetime.strptime(str(time), '%H%M%S')

    # Convert datetime object to desired format
    time_formatted = time_obj.strftime('%H:%M')


    koord.append([lon,lat])
    times.append(time_formatted)
    altitude.append(galt)


for line in f:
    line = line.rstrip()
    if line[0] == 'B':
        matches = re.search(B_Pattern, line)
        if not matches:
            print(line)
            print('===== ERROR parsing above b record =====')
            #PROGRAMM SHOLD TERMINATE HERE AND GIVE AN ERROR
        else:
            record(matches)
    if line[0:10] == 'HOSITSite:':
        Startplatz = line[10:]
        print(Startplatz)
    if line[0:19] == 'HFPLTPILOTINCHARGE:':
        Pilot = line[19:]
        print(Pilot)
    if line[0:16] == 'HFGTYGLIDERTYPE:':
        Gleitschirm = line[16:]
        print(Gleitschirm)


    
#print(f'Polyline = {koord}') #koord ist eine Liste (Polylinie) mit allen Koordinatn
#print(times)
#print(altitude)

polyline_lv95 = transform.wgstolv95(koord)

print(polyline_lv95[0])

polyline = polyline_lv95

hights = []

with rasterio.open("C:/FHNW/4_Semester/4230_Geoinformatik_Raumanalyse_I/Paragliding_App_offline/01_Höhenprofil/01_SOURCE/test.tif") as dataset:

    #dataset.crs = CRS.from_epsg(2056)

    array = dataset.read(1)

    print(array)

    # for i in polyline:
    #     x = i[0]
    #     y = i[1]

    #     # Konvertieren Sie geografische Koordinaten in Pixelkoordinaten
    #     row, col = dataset.index(x, y)
        
    #     # Lese den ersten Band des Rasters aus und gib den Pixelwert an der berechneten Pixelposition aus
    #     band = dataset.read(1)
    #     pixel_value = band[row, col]
        
    #     # Gib den Pixelwert aus
    #     hights.append(pixel_value)

print(hights)

f.close()