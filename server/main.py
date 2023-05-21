from sqlalchemy import or_, create_engine, ForeignKey, Column, String, Integer, CHAR, Boolean, Sequence, VARCHAR, ARRAY, Float, Date, UniqueConstraint
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, query
from sqlalchemy.exc import IntegrityError

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
from utils.functions import *

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


#=================================== FAST API APP ====================================#

app = FastAPI(title='API_NAME',
              description='API_DESC',
              version='0.2.0',
              docs_url='/api/docs',
              redoc_url='/api/redoc',
              openapi_url='/api/openapi.json')

# alow the frontent to connet to the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

# Setting root directory for the jinja templates
templates = Jinja2Templates(directory='./templates')


#----------------------------- define CRUD Endpoints ---------------------------------#

#                                   Registration

@app.get('/api/verify/{register_token}')
def verify(register_token, request: Request):
    try:
        payload = jwt.decode(register_token, SECRET_KEY, algorithms=[ALGORITHM])
        user = payload.get('username')
        user_to_update = session.query(User).filter_by(username=user).first()
        user_to_update.verifyed = True
        session.commit()
        return templates.TemplateResponse('verifyed.html', context={'request': request, 'login': Creds.WEBSITE_HOME})
    except:
        return templates.TemplateResponse('verifycation_error.html',  context={'request': request, 'homepage': Creds.WEBSITE_LOGIN})

@app.post('/api/register')
async def register(username:str, e_mail:str, firstname:str, lastname:str, password: str, shv_nr:int = None):
    try:
        # Validiere die Eingabe
        if not is_valid_input(username, e_mail, firstname, lastname, password, shv_nr):
            raise HTTPException(status_code=400, detail='Invalid input')

        # Versuche, den neuen Benutzer zur Datenbank hinzuzufügen
        new_user = User(username=username, e_mail=e_mail, firstname=firstname, lastname=lastname, password=password, shv_nr=shv_nr, verifyed=False, disabled=False)
        session.add(new_user)
        session.commit()

        register_token_expires = timedelta(minutes=REGISTER_TOKEN_EXPIRE_MINUTES)
        register_token = create_access_token(data=new_user.to_dict(), expires_delta=register_token_expires)

        # sending an authentification Mail to the user
        try:
            sendmail(e_mail, username, register_token)
        except:

            raise HTTPException(status_code=400, detail='not valid mail')

        return f'registration of User: {new_user.username} was successfull'
    
    except IntegrityError as e:
        session.rollback()
        if 'UniqueViolation' in str(e) and 'users_username' in str(e):
            raise HTTPException(status_code=400, detail='Username already exists')
        elif 'UniqueViolation' in str(e) and 'users_e_mail' in str(e):
            raise HTTPException(status_code=400, detail='Email already exists')
        elif 'UniqueViolation' in str(e) and 'shv_nr' in str(e):
            raise HTTPException(status_code=400, detail='SHV Nr already exists')
        else:
            print(f'Integrity Error: {str(e)}')
            raise HTTPException(status_code=500, detail='Internal server error')

@app.post('/api/login')
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail='Could not validate credentials', headers={'WWW-Authenticate':'Bearer'})
    elif user.verifyed == False:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                             detail='User is not verifyed yet')
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data=user.to_dict(), expires_delta = access_token_expires)
    return {'access_token': access_token, 'token_type': 'bearer'}

# Upload IGC
@app.post('/api/upload_igc')
async def upload_igc(current_user: User = Depends(get_current_active_user), file: UploadFile = File(...)):
    name, extention = os.path.splitext(file.filename)
    if extention == '.igc':
        content = file.file.read().decode(encoding='latin-1')
        # extract data from igc with the handle_igc function
        new_flight = handle_igc(content,current_user.user_id)
        try: 
            new_flight = handle_igc(content,current_user.user_id)
        except:
            # handle files wiht wrong structure
            raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE,
                                detail='wrongfilestructure')
        date = new_flight.date
        filepath = os.path.join('./data/igc', f'{date}_{current_user.username}.igc')
        with open(filepath, 'w', encoding='latin-1') as f:
            content = content.replace('\r', '')
            f.write(content)

        # Commit the transaction
        session.add(new_flight)
        session.commit()

        return new_flight.flight_id
    else:
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE,
                            detail='wrongfiletyp')

@app.post('/api/edit_flight')
async def edit_flight(  flight_id:int,
                        flight_name=None,
                        comment: str=None,
                        glider: str=None,
                        takeoff: str=None,
                        landing: str=None,
                        date: datetime=None,
                        current_user: User = Depends(get_current_active_user)):
    try:
        is_users_flight(current_user.user_id, flight_id)
        flight = session.query(Fligth).filter_by(flight_id=flight_id).first()
        # update all values that are not empty
        if flight_name:
            flight.flight_name = flight_name
        if comment:
            flight.comment = comment
        if glider:
            flight.glider = glider
        if takeoff:
            flight.takeoff = takeoff
        if landing:
            flight.landing = landing
        if date:
            flight.date = date

        session.add(flight)
        session.commit()
        return "update succesfull"
    except:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                    detail='error')

# Upload / change Items
@app.post('/upload_fligth_image')
async def mulit_image(  flight_id: int,
                        files: list[UploadFile] = File(...),
                        current_user: User = Depends(get_current_active_user)):
    is_users_flight(current_user.user_id, flight_id)
    allowed_files = {"image/jpeg", "image/png", "image/gif", "image/tiff", "image/bmp", "video/webm"}
    bad_files = []
    for f in files:
        if f.content_type not in allowed_files:
            bad_files.append(f.filename)
    if len(bad_files) > 0:
        return f'Wrong file types: {bad_files}'
    else:
        max_images = 5
        if count_images(flight_id, max_images, len(files)):
            for f in files:
                filename = crate_imge_hash(current_user, f.filename)
                with open(os.path.join('./data/image', filename), 'wb') as buffer:
                    shutil.copyfileobj(f.file, buffer)
                
            return 'Photos uploaded successfully'
        raise  HTTPException(status_code=status.HTTP_409_CONFLICT,
                        detail=f'to mucht photos max = {max_images}')

@app.post('/delete_fligth_image')
async def delete_image(flight_id: int,
                        images: List[str],
                         current_user: User = Depends(get_current_active_user)):
    is_users_flight(current_user.user_id, flight_id)
    path = "./data/image/"
    try:
        for i in images:
            os.remove(path+i)
        return "images removed"
    except:
        return "error"


#-------------------------------------------------------------------------------------#

#=====================================================================================#

