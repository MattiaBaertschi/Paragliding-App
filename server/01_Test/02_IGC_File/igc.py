import fileinput
import re


f = open('./01_Test/02_IGC_File/test.igc','r',encoding='utf-8')

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
    koord.append([lon,lat])
    times.append(time)
    altitude.append(galt)

    print(validity)



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
    
print(koord) #koord ist eine Liste (Polylinie) mit allen Koordinatn
print(times)
print(altitude)


f.close()