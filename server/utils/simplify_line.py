from shapely.geometry import Point, LineString, Polygon, shape
from shapely.ops import *

import json


# Open the JSON file
with open('./utils/response.json') as json_file:
    # Load the contents into a dictionary
    data_dict = json.load(json_file)
    records = data_dict["2"]["gnss_records"]
    records = [(i[0],i[1]) for i in records]
    print(len(records))

polyline = LineString(records)


with open('./data/hexagon_swiss_10km_wgs84_reform.geojson') as f:
    polygons = json.load(f)

data = polygons["features"]

L = []

for feature in data:
    polygon = shape(feature['geometry'])
    if polygon.intersection(polyline):
        region_id = feature['id']
        L.append(region_id)
        
    
print(L)



l = LineString(records)
l = l.simplify(0.0001)


print(len(list(l.coords)))