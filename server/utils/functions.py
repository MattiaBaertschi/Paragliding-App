from sqlalchemy import *
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, query, aliased
from sqlalchemy.exc import IntegrityError
from sqlalchemy.dialects.postgresql import JSON

from fastapi import Depends, FastAPI, File, UploadFile, Form, HTTPException, status, Request
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import RedirectResponse

import shapely
from shapely.geometry import shape, Point, LineString

import shutil

from jose import jwt, JWTError
from datetime import datetime, timedelta

from utils.handle_mail import sendmail
from utils.Models import *

import random

from typing import Optional, List, Any

import os

import json


#============================= Setup for secure login ================================#
SECRET_KEY = LOGIN_KEY
ALGORITHM = 'HS256'
ACCESS_TOKEN_EXPIRE_MINUTES = 3600
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
    flight_ids = [flight.flight_id for flight in session.query(Flight).filter_by(user_id=user_id).all()]
    if not flight_id in flight_ids:
        raise  HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                detail='not flight of logged in user')

def count_images(flight_id, max_images, len_to_upload):
    images = session.query(Flight.img_link).filter_by(flight_id=flight_id).all()


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
            with open(os.path.join(IMAGE_PATH, filename), 'wb') as buffer:
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
    
def create_profile_picture(file, user_id):
    user = session.query(User).filter_by(user_id=user_id).first()
    # check for existing profile picture and delete them
    if user.profile_picture:
            os.remove(PROFILE_PICT_PATH+"/"+user.profile_picture)
    # create new filename
    filename = create_image_hash(user, file.filename)
    # save new filename to database
    user.profile_picture = filename
    session.add(user)
    session.commit()
    session.rollback()
    with open(os.path.join(PROFILE_PICT_PATH, filename), 'wb') as buffer:
        shutil.copyfileobj(file.file, buffer)

def create_image_hash(user, filename):
    ending = '.'+filename.split('.')[-1]
    date = datetime.utcnow()
    to_encode = user.to_dict()
    to_encode.update({'filename': filename})
    hash = jwt.encode(to_encode, MAIL_KEY, algorithm=ALGORITHM)
    l = list(hash)
    random.shuffle(l)
    hash = ''.join(l)
    return hash[0:25]+ending

def get_flights_for_feed(user_id, amount):
    buddys_and_me = get_buddys_and_me(user_id)
    print(buddys_and_me)
    flights = (session.query(Flight, User)
                .filter(Flight.user_id.in_(buddys_and_me))
                .join(User, User.user_id == Flight.user_id)  # Änderung des Join-Kriteriums
                .order_by(desc(Flight.upload_date))
                .all())
    json_list = []  # List to store flight dictionaries
    for flight, user in flights:
        flight_dict = {
            "flight_id": flight.flight_id,
            "upload_date": flight.upload_date,
            "user_id": flight.user_id,
            "username": user.username,
            "comment": flight.comment,
            "gnss_records_simple": flight.gnss_records_simple,
            "takeoff": flight.takeoff,
            "landing": flight.landing,
            "start_time": flight.start_time,
            "end_time": flight.end_time,
            "duration": flight.duration,
            "biplace": flight.biplace,
            "date": flight.date,
            "images": flight.images,
            "glider": flight.glider,
            "wind_kmh": flight.wind_kmh,
            "temp_celsius": flight.temp_celsius
        }
        json_list.append(flight_dict)

    return json_list


def update_flight_region(polyline, flight_id):
    # Read the GeoJSON file
    with open('./data/hexagon_swiss_10km_wgs84_reform.geojson') as f:
        polygons = json.load(f)

    data = polygons["features"]

    polyline = LineString(polyline)

    Region_ids = []

    # Check if the point is within any of the polygons
    for feature in data:
        polygon = shape(feature['geometry'])
        if polygon.intersection(polyline):
            region_id = feature['id']
            Region_ids.append(region_id)

    for i in Region_ids:
        flight_region = Flight_in_Region(i, flight_id)
        session.add(flight_region)
    session.commit()


def get_buddys_and_me(user_id):
    buddys_ids = (session.query(UserRelation.followed_id)
                    .filter(UserRelation.follower_id == user_id,
                                UserRelation.accepted == True)
                    .all())
    buddys_ids = tuple([int(i[0]) for i in buddys_ids])
    return buddys_ids + (user_id, )

def get_flights_per_region_for_user(user_id):
    fir = aliased(Flight_in_Region)

    result = session.query(
        fir.region_id,
        func.count().label('flight_count')
    ).join(
        Flight, Flight.flight_id == fir.flight_id
    ).filter(
        Flight.user_id == user_id
    ).group_by(
        fir.region_id
    ).all()

    regions = []
    for row in result:
        region_id = row.region_id
        flight_count = row.flight_count
        regions.append({
            "region_id": region_id,
            "flight_count": flight_count
        })

    return regions

def get_most_flights_per_region(buddys_and_me):
    fir = aliased(Flight_in_Region)

    result = session.query(
        fir.region_id,
        Flight.user_id,
        User.username,
        func.count().label('flight_count')
    ).join(
        Flight, Flight.flight_id == fir.flight_id
    ).join(
        User, User.user_id == Flight.user_id
    ).group_by(
        fir.region_id, Flight.user_id, User.username
    ).subquery()

    subquery = session.query(
        result.c.region_id,
        result.c.user_id,
        result.c.username,
        result.c.flight_count,
        func.row_number().over(
            partition_by=result.c.region_id,
            order_by=result.c.flight_count.desc()
        ).label('rn')
    ).subquery()

    final_result = session.query(
        subquery.c.region_id,
        subquery.c.user_id,
        subquery.c.username,
        subquery.c.flight_count
    ).where(subquery.c.rn == 1, subquery.c.user_id.in_(list(buddys_and_me)))

    json = {}

    # transform query result to json
    for row in final_result:
        region_id = row.region_id
        user_id = row.user_id
        flight_count = row.flight_count
        username = row.username
        json[region_id] = {"count": flight_count,
                            "user_id": user_id,
                            "username": username}
    return json

def to_json_all_flights(Model):
    json = {}
    for i in Model:
        json[i.flight_id] = i.to_dict_all_flights()
        result = session.query(User.username).filter(User.user_id == i.user_id).first()
        username = result[0]
        json[i.flight_id].update({"username":username})
    return json

def to_json_all_users(user):
    json = {}
    for i in user:
        json[i.user_id] = i.to_dict_all_users()
    return json

def simplify(gnss_records):
    print(len(gnss_records))
    l = LineString(gnss_records)
    l = l.simplify(0.0001)
    print(len(list(l.coords)))
    return list(l.coords)

def userprofile_stats(user_id):
    #get all atributes from user table
    user = session.query(User).filter(User.user_id == user_id).first()
    user_dict = user.to_dict_display()
    #get amount of flights for logged in user
    count_flights = session.query(Flight).filter_by(user_id=user.user_id).count()
    user_dict.update({"total_flights":count_flights})
    #get amount of follower for logged in user
    count_follower = session.query(func.count(UserRelation.followed_id)).where(UserRelation.followed_id == user_id, UserRelation.accepted == True).scalar()
    user_dict.update({"total_followers":count_follower})
    #get amount of followed for logged in user
    count_followed = session.query(func.count(UserRelation.follower_id)).filter(UserRelation.follower_id == user_id, UserRelation.accepted == True).scalar()
    user_dict.update({"total_followed":count_followed})

    return user_dict

def is_following(user_id, followed_id):
    try:
        accepted = session.query(UserRelation.accepted).filter_by(followed_id=followed_id, follower_id=user_id).first()
        if accepted[0] == True:
            return True
        else:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                            detail='Der Benuzter hat ihre Anfrage noch nicht akzeptiert')
    except:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                                            detail='Benuzer ist nicht abboniert')
    
