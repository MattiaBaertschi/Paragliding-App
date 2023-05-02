import requests

token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0aW0iLCJleHAiOjE2ODI5NDc2NjJ9.N0ij_Kf0WcBuvzm6TosR3Gi8ZuIdASkQdP3N0iuqk9A"

url = "http://localhost:8000/users/me"


headers = {
    "Authorization": f"Bearer {token}"
}

response = requests.get(url, headers=headers)

print(response)