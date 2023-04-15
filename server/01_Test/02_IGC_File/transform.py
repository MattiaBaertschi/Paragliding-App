from pyproj import Transformer


def wgstolv95(l):
    wgs84= "epsg:4326"
    lv95= "epsg:2056"
    trans_wgstolv95 = Transformer.from_crs(wgs84, lv95)
    r = []
    for i in l:
        c = trans_wgstolv95.transform(i[1], i[0])
        rounded_values = list(map(lambda x: round(x, 2), c))
        r.append(list(rounded_values))
    return r

