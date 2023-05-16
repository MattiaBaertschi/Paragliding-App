from sqlalchemy import create_engine, ForeignKey, Column, String, Integer, CHAR, Boolean, Sequence, VARCHAR, ARRAY, Float, Date, UniqueConstraint
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, query
from sqlalchemy.exc import IntegrityError

from fastapi import Depends, FastAPI, File, UploadFile, Form, HTTPException, status, Request
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from fastapi.templating import Jinja2Templates
from fastapi.responses import RedirectResponse

from jose import jwt, JWTError
from datetime import datetime, timedelta

from utils.handle_igc import handle_igc
from utils.handle_mail import sendmail
from utils.Models import TokenData, Fligth, User, engine, Base, Creds

from typing import Optional, Union

import os

import json


#============================= Setup for secure login ================================#
SECRET_KEY = Creds.LOGIN_KEY
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
REGISTER_TOKEN_EXPIRE_MINUTES = 10



OAuth_2_scheme = OAuth2PasswordBearer(tokenUrl="login")
#=====================================================================================#



#=================================== initalize Database ==============================#
Session = sessionmaker(bind=engine)
session = Session()
#=====================================================================================#



#=================================== FAST API APP ====================================#

app = FastAPI(title="API_NAME",
              description="API_DESC",
              version="0.2.0",
              docs_url='/api/docs',
              redoc_url='/api/redoc',
              openapi_url='/api/openapi.json')

# alow the frontent to connet to the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Setting root directory for the jinja templates
templates = Jinja2Templates(directory='./templates')


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

    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    
    return encoded_jwt


async def get_current_user(token: str = Depends(OAuth_2_scheme)):
    credential_exeption = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                        detail="Could not validate credentials", headers={"WWW-Authenticate":"Bearer"})
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("username")
        print("the payload is:")
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
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user
#-------------------------------------------------------------------------------------#


#----------------------------- define CRUD Endpoints ---------------------------------#

#                                   Registration

@app.get("/api/verify/{register_token}")
def verify(register_token, request: Request):
    try:
        payload = jwt.decode(register_token, SECRET_KEY, algorithms=[ALGORITHM])
        user = payload.get("username")
        user_to_update = session.query(User).filter_by(username=user).first()
        user_to_update.verifyed = True
        session.commit()
        return templates.TemplateResponse("verifyed.html", context={'request': request, 'login': Creds.WEBSITE_HOME})
    except:
        return templates.TemplateResponse("verifycation_error.html",  context={'request': request, 'homepage': Creds.WEBSITE_LOGIN})

@app.post("/api/register")
async def register(username:str, e_mail:str, firstname:str, lastname:str, password: str, shv_nr:int = None):
    try:
        # Validiere die Eingabe
        if not is_valid_input(username, e_mail, firstname, lastname, password, shv_nr):
            raise HTTPException(status_code=400, detail="Invalid input")

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

        return f"registration of User: {new_user.username} was successfull"
    
    except IntegrityError as e:
        session.rollback()
        if 'UniqueViolation' in str(e) and 'users_username' in str(e):
            raise HTTPException(status_code=400, detail="Username already exists")
        elif 'UniqueViolation' in str(e) and 'users_e_mail' in str(e):
            raise HTTPException(status_code=400, detail="Email already exists")
        elif 'UniqueViolation' in str(e) and 'shv_nr' in str(e):
            raise HTTPException(status_code=400, detail="SHV Nr already exists")
        else:
            print(f"Integrity Error: {str(e)}")
            raise HTTPException(status_code=500, detail="Internal server error")


@app.post("/api/login")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)
    print(user.username)
    print(form_data.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Could not validate credentials", headers={"WWW-Authenticate":"Bearer"})
    elif user.verifyed == False:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                             detail="User is not verifyed yet")
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data=user.to_dict(), expires_delta = access_token_expires)
    return {"access_token": access_token, "token_type": "bearer"}

# Upload IGC
@app.post('/api/upload_igc')
async def upload_igc(current_user: User = Depends(get_current_active_user), file: UploadFile = File(...)):
    name, extention = os.path.splitext(file.filename)
    if extention == '.igc':
        content = file.file.read().decode(encoding='latin-1')
        # extract data from igc with the handle_igc function
        try: 
            data = handle_igc(content, 20)
        except:
            # handle files wiht wrong structure
            raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE,
                                detail="wrongfiletyp")
        date = data['date']
        filepath = os.path.join('./data/igc', f'{date}_{User.user_id}.igc')
        with open(filepath, 'w', encoding='latin-1') as f:
            content = content.replace('\r', '')
            f.write(content)
        
        coord = data['coord'].tolist()
        print("user_id / username")
        print(f"{current_user.user_id} / {current_user.username}")

        new_flight = Fligth(polyline=coord, pilot=current_user.user_id)

        # Commit the transaction
        session.add(new_flight)
        session.commit()

        return new_flight.flight_id
    else:
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE,
                            detail="wrongfiletyp")

#-------------------------------------------------------------------------------------#

#=====================================================================================#

