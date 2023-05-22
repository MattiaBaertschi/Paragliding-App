from sqlalchemy import or_, create_engine, ForeignKey, Column, String, Integer, CHAR, Boolean, Sequence, VARCHAR, ARRAY, Float, Date, UniqueConstraint
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, query
from sqlalchemy.exc import IntegrityError
from sqlalchemy.dialects.postgresql import JSON

from fastapi import Depends, FastAPI, File, UploadFile, Form, HTTPException, status, Request
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from fastapi.templating import Jinja2Templates
from fastapi.responses import RedirectResponse

import shutil

from jose import jwt, JWTError
from datetime import datetime, timedelta

from utils.handle_igc import handle_igc
from utils.handle_mail import sendmail
from utils.Models import *

import random

from typing import Optional, List, Any

import os

import json


#============================= Setup for secure login ================================#
SECRET_KEY = Creds.LOGIN_KEY
ALGORITHM = 'HS256'
ACCESS_TOKEN_EXPIRE_MINUTES = 30
REGISTER_TOKEN_EXPIRE_MINUTES = 10



OAuth_2_scheme = OAuth2PasswordBearer(tokenUrl='login')
#=====================================================================================#



#=================================== initalize Database ==============================#
Session = sessionmaker(bind=engine)
session = Session()
#=====================================================================================#


#------------------------- Functions for the Login process ---------------------------#

def is_valid_input(username, e_mail, firstname, lastname, password, shv_nr):
    # Überprüfe, ob die Eingabe den erwarteten Kriterien entspricht
    if not isinstance(username, str):
        print(type(username))
        return False
    
    if not isinstance(e_mail, str):
        print(type(e_mail))
        return False
    
    if not isinstance(firstname, str):
        return False
    
    if not isinstance(lastname, str):
        return False
    
    if not isinstance(password, str):
        return False
    
    if shv_nr is not None:
        if not isinstance(shv_nr, (int)):
            return False
        
        # Überprüfe, ob die SHV-Nummer eine Zahl mit 6 Ziffern ist
        shv_nr = str(shv_nr)
        if not shv_nr.isdigit() or len(shv_nr) != 6:
            return False
    
    # Weitere Validierungsregeln können hier hinzugefügt werden
    # Zum Beispiel: Überprüfung der E-Mail-Formatierung oder des Passwortmusters
    
    return True

def verify_password(entered_password, stored_password):
    if entered_password == stored_password:
        return True
    return False

def get_user(Username:str):
    try:
        user = session.query(User).filter_by(username=Username).first()
        return user
    except:
        return False

def authenticate_user(username: str, password: str):
    user = get_user(username)
    if not user:
        return False
    if not verify_password(password, user.password):
        return False
    return user


def create_access_token(data: dict, expires_delta: timedelta or None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)

    to_encode.update({'exp': expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    
    return encoded_jwt


async def get_current_user(token: str = Depends(OAuth_2_scheme)):
    credential_exeption = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                        detail='Could not validate credentials', headers={'WWW-Authenticate':'Bearer'})
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get('username')
        print('the payload is:')
        print(payload)
        if username is None:
            raise credential_exeption
        token_data = TokenData(username=username)
    except JWTError:
        raise credential_exeption

    user = get_user(username)
    if user is None:
        raise credential_exeption
    print(user)
  
    return user


async def get_current_active_user(current_user: User.password = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail='Inactive user')
    return current_user


#-------------------------------------------------------------------------------------#


def is_users_flight(user_id, flight_id):
    flight_ids = [flight.flight_id for flight in session.query(Flight).filter_by(pilot=user_id).all()]
    if not flight_id in flight_ids:
        raise  HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                detail='not flight of logged in user')

def count_images(flight_id, max_images, len_to_upload):
    images = session.query(Flight.img_link).filter_by(flight_id=flight_id).all()


# def update_image_list(flight_id, new_image:str, max_images):
#     flight = session.query(Flight).filter_by(flight_id=flight_id).first()
#     if flight:
#         if len(flight.img_link) < max_images:
#             image_list = flight.img_link  # Get the image list
#             image_list.append(new_image)  # Append the new item
#             new_list = image_list.copy()
#             flight.img_link = list(new_list)
#             print(new_list)
#             print(type(new_list))
#             session.add(flight)
#             session.commit()  # Commit the changes to the database
#         else:
#             raise  HTTPException(status_code=status.HTTP_409_CONFLICT,
#                                 detail='maximum image uploads of {max_images} reached')

def update_image_list(flight_id:int, max_images:int, files, user):
    for f in files:
        filename = create_image_hash(user, f.filename)
        flight = session.query(Flight).filter_by(flight_id=flight_id).first()
        if len(flight.images) < max_images:
            new_images = flight.images + [filename]  # Create a new list with the appended image
            flight.images = new_images
            session.add(flight)
            session.commit()  # Commit the changes to the database
            session.rollback()
            with open(os.path.join('./data/image', filename), 'wb') as buffer:
                shutil.copyfileobj(f.file, buffer)
        else:
            raise HTTPException(status_code=status.HTTP_409_CONFLICT,
                                 detail=f'max upload reached')

def update_image_list_delete(flight_id:int, imagename: str):
    flight = session.query(Flight).filter_by(flight_id=flight_id).first()
    if len(flight.images)>0:
        l = []
        for i in flight.images:
            if i != imagename:
                l.append(i)
        print(l)
        flight.images = l
        session.add(flight)
        session.commit()  # Commit the changes to the database
    else:
        session.rollback()
        raise HTTPException(status_code=status.HTTP_409_CONFLICT,
                    detail=f'no images found')
    
    
def create_image_hash(user, filename):
    ending = '.'+filename.split('.')[-1]
    date = datetime.utcnow()
    to_encode = user.to_dict()
    to_encode.update({'filename': filename})
    #to_encode.update({'date': date})
    hash = jwt.encode(to_encode, Creds.MAIL_KEY, algorithm=ALGORITHM)
    l = list(hash)
    random.shuffle(l)
    hash = ''.join(l)
    return hash[0:25]+ending

def feed_json(flights, amount):
    json = {}
    c = 1
    for i in flights:
        if c < amount:
            i.to_dict
            json.update(i.to_dict())
            c+=1
    return json

