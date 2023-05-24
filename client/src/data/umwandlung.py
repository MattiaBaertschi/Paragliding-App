import json

# Lesen Sie das ursprüngliche GeoJSON
with open('hexagon_swiss_10km_wgs84.geojson') as f:
    data = json.load(f)

# Erstellen Sie ein neues GeoJSON-Format
new_geojson = {
    "type": "FeatureCollection",
    "name": "regionPolygons",
    "features": []
}

# Konvertieren Sie jede "Feature" in das neue Format
for feature in data['features']:
    new_feature = {
        "id": feature['properties']['id'],
        "type": "Feature",
        "properties": {
            "Region": feature['properties']['id'],
            "Name": "RegionName"  # Hier müssen Sie den tatsächlichen Namen einfügen
        },
        "geometry": {
            "type": "MultiPolygon",
            "coordinates": [feature['geometry']['coordinates']]
        }
    }
    new_geojson['features'].append(new_feature)

# Speichern Sie das neue GeoJSON
with open('new.geojson', 'w') as f:
    json.dump(new_geojson, f)
