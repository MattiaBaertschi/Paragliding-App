import fileinput
import re
from datetime import datetime
import transform
import rasterio
import numpy as np
from rasterio.crs import CRS
import requests
import csv
from shapely.geometry import LineString


f = open('./01_Test/02_IGC_File/2023-03-03-XCT-PAE-01.igc','r',encoding='utf-8')
#f = open('./01_Test/02_IGC_File/test.igc','r',encoding='utf-8')


koord = []
times = []
altitude = []
index = []
testkoord = []

count = 0

B_Pattern = re.compile((r"^B(\d{6})(\d{2})(\d{5})(N|S)(\d{3})(\d{5})(E|W)(A|V)([0-9-]{5})(\d{5})(.*)$"))

def record(match):
    global count
    time = int(match[1])
    lat = int(match[2]) + (int(match[3])/60000)
    lon = int(match[5]) + (int(match[6])/60000)
    lat = lat if match[4] == 'N' else -lat
    lon = lon if match[7] == 'E' else -lon
    validity = match[8]
    palt = int(match[9])
    galt = int(match[10])
    rest = match[11]
    count += 1

    # Convert string to datetime object
    time_obj = datetime.strptime(str(time), '%H%M%S')

    # Convert datetime object to desired format
    time_formatted = time_obj.strftime('%H:%M')


    koord.append([round(lon,6),round(lat,6)])
    times.append(time)
    altitude.append(galt)
    index.append(count)
    testkoord.append([round(lat,6),round(lon,6)])


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
    if line[18:25] == 'TAKEOFF':
        takeoff = line[26:]
        print(takeoff)
    if line[18:25] == 'LANDING':
        landing = line[26:]
        print(landing)
    if line[0:19] == 'HFPLTPILOTINCHARGE:':
        pilot = line[19:]
        print(pilot)
    if line[0:16] == 'HFGTYGLIDERTYPE:':
        glider = line[16:]
        print(glider)

f.close()

koord_lv95 = transform.wgstolv95(koord)
koord_str = ""
reduced_altitude = []
lon = []
lat = []
e = []
n = []
reduced_times = []
reduced_index = []


for i in range(0,len(koord),20):
    koord_str = koord_str + str(koord[i][1]) + "," + str(koord[i][0]) + ","
    reduced_altitude.append(altitude[i])
    lon.append(koord[i][0])
    lat.append(koord[i][1])
    e.append(koord_lv95[i][0])
    n.append(koord_lv95[i][1])
    reduced_times.append(times[i])
    reduced_index.append(index[i])
    
    


koord_str = koord_str.rstrip(",")


    
#print(f'Polyline = {koord}') #koord ist eine Liste (Polylinie) mit allen Koordinatn
#print(times)
#print(altitude)

# polyline_lv95 = transform.wgstolv95(koord)



url = "https://api.airmap.com/elevation/v1/ele?points=" + koord_str
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    #print(data['data'])

else:
    print("error")



agl = []
for i in range(0,len(reduced_altitude)):
    agl.append(reduced_altitude[i]-data['data'][i])


arr = np.asarray([reduced_altitude,data['data'],agl,lon,lat,e,n,reduced_index,reduced_times])
arr = arr.T

headings = ['Hight_Glider','Terrain_API','AGL','lon','lat','E','N','index','timestamp']


np.savetxt('./01_Test/02_IGC_File/sample.csv', arr, fmt='%d,%d,%d,%.6f,%.6f,%.3f,%.3f,%d,%d', delimiter=",", encoding='utf-8', header=','.join(headings))

line = LineString(testkoord)

line = line.simplify(0.005, preserve_topology=False)


coord_list = list(line.coords)


# convert the coordinate pairs to a list of lists
point_list = [[x, y] for x, y in coord_list]


line = np.hstack((np.arange(len(line.coords)).reshape(-1, 1), np.array(line.coords)))
print(line)

np.savetxt('./01_Test/02_IGC_File/simplifyed.csv', line, fmt='%d,%.6f,%.6f', delimiter=",", encoding='utf-8', header='index,lon,lat')



# with open("./01_Test/02_IGC_File/linestirng.txt","w") as file:
#    file.write(str(point_list))



