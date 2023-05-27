from utils.aero import Reader
from utils.Models import Flight
from utils.functions import *

from datetime import datetime
import json

import requests

# definig the reduce factor of the waypoints for the elevation API-request
reduce_factor = 20



def handle_igc(file,user_id:int):
    parsed = Reader().read(file.splitlines())

    header = parsed['header'][1]
    fix_records = parsed['fix_records']

    for i in fix_records:
        # all waypoints from the B-Record
        coord = [[j['lon'], j['lat']] for j in i]
        # all waypoints from the B-Record with timestamp
        coord_time = [[j['lon'], j['lat'], int(j['time'].strftime("%H%M%S"))] for j in i]
        # all altitudes form the B-Record with timestamp
        alt_gnss = [[j['gps_alt'],int(j['time'].strftime("%H%M%S"))] for j in i]
        # all timesapmps from the B-Record
        time = [[j['time']] for j in i]

    start = time[0][0]
    end = time[-1][0]
    try: 
        pilot = header['pilot']
    except:
        pilot = None
    try:
        takeoff = header['site']
    except:
        takeoff = None
    try:
        glider = header['glider_model']
    except:
        glider = None
    try:
        date = header['utc_date']
    except:
        date = None

    #time difference
    dummy_date = datetime(1970, 1, 1).date()
    datetime1 = datetime.combine(dummy_date, start)
    datetime2 = datetime.combine(dummy_date, end)
    time_difference = datetime2 - datetime1

    # reduce coordinates by the defined factor in order to make the API-Request faster
    reduced_coord = [row[:2] for row in coord][::reduce_factor]
    maching_time = time[::reduce_factor]
    alt_gnss = [row for row in alt_gnss][::reduce_factor]

    # Add all Parameters to the new flight
    new_flight = Flight(user_id=user_id,
                        gnss_records = coord_time,
                        gnss_records_simple = simplify(coord),
                        alt_gnss = alt_gnss,
                        takeoff = takeoff,
                        start_time = start,
                        end_time = end,
                        duration = time_difference,
                        glider =  glider,
                        date = date,
                        upload_date = datetime.utcnow()
                        )

    #turn coordinates in to string for the API-Request
    red_coord_str = ""
    for i in reduced_coord:
        red_coord_str = red_coord_str + str(i[1]) + "," + str(i[0]) + ","

    # getting matching trrain level from the elevation-api "https://api.airmap.com"
    api_url = "https://api.airmap.com/elevation/v1/ele?points=" + red_coord_str.rstrip(",")
    response = requests.get(api_url)

    if response.status_code == 200:
        terrain = (response.json()['data'])
        # appending the according time to the terrain points
        maching_time = [int(j[0].strftime("%H%M%S"))for j in maching_time]
        terrain_time = [[count, time] for count, time in zip(terrain, maching_time)]
        new_flight.terrain = terrain_time
    return new_flight
