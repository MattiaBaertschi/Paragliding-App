import requests
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0aW0iLCJleHAiOjE2ODMyNzcyMjd9.aWR1HKpMpWfTtxqDG1Xt4H4sSbqLbGReVSIaNyt7tCg"
url = "https://hoemknoebi.internet-box.ch/api/users/me"
headers = {
    "Authorization": f"Bearer {token}"
}
response = requests.get(url, headers=headers)
print(response.text)