import numpy as np
import re
import requests
from datetime import datetime

def handle_igc(file, reduce_factor):

    # define B_Pattern structure of igc-file
    B_Pattern = re.compile((r"^B(\d{6})(\d{2})(\d{5})(N|S)(\d{3})(\d{5})(E|W)(A|V)([0-9-]{5})(\d{5})(.*)$"))

    # save needet parameters from igc to variables
    a = []

    def record(match, a):
        time = datetime.strptime(str(match[1]),'%H%M%S')
        lat = int(match[2]) + (int(match[3])/60000)
        lon = int(match[5]) + (int(match[6])/60000)
        lat = lat if match[4] == 'N' else -lat
        lon = lon if match[7] == 'E' else -lon
        validity = match[8]
        alt_gnss = int(match[10])

        a.append([lon, lat, time, alt_gnss])
        return a

    for line in file.splitlines():
        line = line.rstrip()
        if line[0] == 'B':
            matches = re.search(B_Pattern, line)
            if not matches:
                raise Exception("An error has occurred.")
            else:
                record(matches,a)
        if line[18:25] == 'TAKEOFF':
            takeoff = line[26:]
        if line[0:9] == 'HFDTEDATE':
            date = line[10:16]
        if line[18:25] == 'LANDING':
            landing = line[26:]
        if line[0:19] == 'HFPLTPILOTINCHARGE:':
            pilot = line[19:]
        if line[0:16] == 'HFGTYGLIDERTYPE:':
            glider = line[16:]


    # define matrix with Data as numpy array
    a = np.array(a)

    # save all coordinates to array
    coord = a[:,:2]

    # reduce date by factor {reduce_factor} given with funciton
    reduced_data = a[::reduce_factor]

    # API Request for matching terrain hights
    koord_str = ""
    for i in reduced_data[:,:2]:
        koord_str = koord_str + str(i[1]) + "," + str(i[0]) + ","

    api_url = "https://api.airmap.com/elevation/v1/ele?points=" + koord_str.rstrip(",")
    response = requests.get(api_url)

    if response.status_code == 200:
        data = np.array(response.json()['data'])

    else:
        return"error"
    
    # append elevation of terrain to each point in the reduced data array
    # format of reduced data array = lon;lat;time;alt_gnss;alt_terrain | altitudes => GRS-80
    data = data[:, np.newaxis]
    reduced_data = np.column_stack((reduced_data, data))

    t = reduced_data[:,2].astype('datetime64[s]')
    flighttime_sec = int((t[-1]-t[0])/np.timedelta64(1,'s'))

    data = {
        'coord': coord,
        'date': date,
        'takeoff': takeoff,
        'landing': landing,
        'pilot': pilot,
        'glider': glider, 
        'reduced_data': reduced_data,
        'flighttime_sec': flighttime_sec
    }

    # return all necessary parameters
    return data

