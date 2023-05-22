import utils.Models
from utils.functions import *
# Usage
flight_id = 1
new_item = "new_item"
update_image_list(flight_id, new_item)


# def authenticate_user(username: str, password: str):
#     user = get_user(username)
#     if not user:
#         return False
#     if not verify_password(password, user.password):
#         return False
#     return user





# import numpy as np
# import requests

# a = [[1,2,10],[3,4,20],[5,6,30],[7,8,40],[9,10,50]]
# reduce_factor = 2

# test = [row[:2] for row in a][::reduce_factor]
# maching_time = [row[2:3][0] for row in a][::reduce_factor]


# red_coord_str = ""
# for i in test:
#     red_coord_str = red_coord_str + str(i[1]) + "," + str(i[0]) + ","



# # # define matrix with Data as numpy array
# # a = np.array(a)

# # # save all coordinates to array
# # coord = a[:,:2]

# # # reduce date by factor {reduce_factor} given with funciton
# # reduced_data = a[::reduce_factor]

# # # API Request for matching terrain hights
# # koord_str = ""
# # for i in reduced_data[:,:2]:
# #     koord_str = koord_str + str(i[1]) + "," + str(i[0]) + ","

# api_url = "https://api.airmap.com/elevation/v1/ele?points=" + red_coord_str.rstrip(",")
# response = requests.get(api_url)

# if response.status_code == 200:
#     data = np.array(response.json()['data'])

# else:
#     print("error")

# print(data)

# print(test)
# print(maching_time)

# result = [sublist + [num] for sublist, num in zip(test, maching_time)]

# print(result)