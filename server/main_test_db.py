from sqlalchemy import create_engine, ForeignKey, Column, String, Integer, CHAR, Boolean, Sequence, VARCHAR, ARRAY, Float, Date, UniqueConstraint
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, query

from fastapi import Depends, FastAPI, File, UploadFile, Form, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware

from jose import jwt, JWTError
from datetime import datetime, timedelta

import json

import os

from utils.handle_igc import handle_igc
from utils.handle_mail import sendmail
from utils.Models import Token, TokenData, Fligth, User, engine, Base, Creds


#============================= Setup for secure login ================================#
SECRET_KEY = Creds.LOGIN_KEY
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30



OAuth_2_scheme = OAuth2PasswordBearer(tokenUrl="login")
#=====================================================================================#



#=================================== initalize Database ==============================#

Session = sessionmaker(bind=engine)
session = Session()
#=====================================================================================#



#=================================== FAST API APP ====================================#

app = FastAPI()

# alow the frontent to connet to the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#------------------------- Functions for the Login process ---------------------------#

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
        username: str = payload.get("sub")
        if username is None:
            raise credential_exeption
        token_data = TokenData(username=username)
    except JWTError:
        raise credential_exeption

    user = get_user("amba999").to_dict()
    if user is None:
        raise credential_exeption
  
    return user


async def get_current_active_user(current_user: User.password = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user
#-------------------------------------------------------------------------------------#


#----------------------------- define CRUD Endpoints ---------------------------------#

#                                   Registration

# @app.post("/verify")
# async def 

@app.post("/register")
async def register(username, e_mail, firstname, lastname, password, shv_nr):
    
    new_user = User(username=username, e_mail=e_mail, firstname=firstname, lastname=lastname, password=password, shv_nr=shv_nr, disabled=False, verifyed=False)
    session.add(new_user)
    session.commit()
    sendmail(e_mail)
    return f"login of User: {new_user} was successfull"

@app.post("/login")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Could not validate credentials", headers={"WWW-Authenticate":"Bearer"})
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data=user.to_dict(), expires_delta = access_token_expires)
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/users/me")
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user

@app.get("/users/me/items")
async def read_own_items(current_user: User = Depends(get_current_active_user)):
    return [{"item_id":1, "owner": current_user}]


#-------------------------------------------------------------------------------------#




#=====================================================================================#
















# u1 = User(username='amba999', e_mail='mattia@test', firstname='Mattia', lastname='Bärtschi', password='pw', shv_nr=12, disabled=True)
# session.add(u1)
# session.commit()



# f1 = Fligth(flight_name = "flug eins", pilot = u1.user_id ,polyline= [[2,3],[2.4,5.6]])

# session.add(f1)
# session.commit()

# ----------- Query Example -------------

# results = session.query(User).all()
# print(results)
 


