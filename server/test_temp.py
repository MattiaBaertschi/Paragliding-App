import json


with open('./utils/secret.json') as f:
    j = json.load(f)

print(j['db_password'])