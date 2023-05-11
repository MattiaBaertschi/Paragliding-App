import requests
from requests.auth import HTTPBasicAuth

url = "https://hoemknoebi.internet-box.ch/api/login"


# Define the username and password for authentication
username = 'tim'
password = 'pw'

# Define the request parameters as a dictionary
request_params = {
    'grant_type': 'password',
    'username': username,
    'password': password
}

# Send the request to the API with HTTP Basic authentication and the request parameters
response = requests.post(url, auth=HTTPBasicAuth('client_id', 'client_secret'), data=request_params)

# Check the response status code
if response.status_code == requests.codes.ok:
    print("Request successful!")
else:
    print("Error in request:", response.status_code)

print(response.json()['access_token'])
