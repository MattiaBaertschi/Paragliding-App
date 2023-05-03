import requests

token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0aW0iLCJleHAiOjE2ODMwMTUwNzB9.ohH2LTOgTPpDn6Nh1pSReIJFHUppWI2frX4YJ4qqioQ"


url = "http://localhost:8000/users/me"


headers = {
    "Authorization": f"Bearer {token}"
}

response = requests.get(url, headers=headers)



print(response.text)