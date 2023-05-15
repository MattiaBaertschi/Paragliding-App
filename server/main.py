from sqlalchemy import create_engine, ForeignKey, Column, String, Integer, CHAR, Boolean, Sequence, VARCHAR, ARRAY, Float, Date, UniqueConstraint
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, query
from sqlalchemy.exc import IntegrityError

from fastapi import Depends, FastAPI, File, UploadFile, Form, HTTPException, status, Request
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware

from fastapi.templating import Jinja2Templates
from fastapi.responses import RedirectResponse

from jose import jwt, JWTError
from datetime import datetime, timedelta

from utils.handle_igc import handle_igc
from utils.handle_mail import sendmail
from utils.Models import TokenData, Fligth, User, engine, Base, Creds

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

app = FastAPI()

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

@app.get("/verify/{register_token}")
def verify(request: Request):
    try:
        payload = jwt.decode(register_token, SECRET_KEY, algorithms=[ALGORITHM])
        user = payload.get("username")
        user_to_update = session.query(User).filter_by(username=user).first()
        user_to_update.verifyed = True
        session.commit()
        return templates.TemplateResponse("verifyed.hmtl", context={'request': request, 'login': Creds.WEBSITE_HOME})
    except:
        return templates.TemplateResponse("verifycation_error.html",  context={'request': request, 'homepage': Creds.WEBSITE_LOGIN})

@app.post("/register")
async def register(username, e_mail, firstname, lastname, password, shv_nr):
     # try to add the new user to the database
    new_user = User(username, e_mail, firstname, lastname, password, shv_nr, False, False)
    print(str(IndentationError))
    try:
        session.add(new_user)
        session.commit()
    except IntegrityError as e:
        # if the error is a unique constraint violation, issue a specific message
        if 'UniqueViolation' in str(e) and 'users_username' in str(e):
            return 'username_exists_already'
        elif 'UniqueViolation' in str(e) and 'users_e_mail' in str(e):
            return 'mail_exists_already'
        else:
            print(f"Integrity Error: {str(e)}")
            return 'error'
        session.rollback()
    
    register_token_expires = timedelta(minutes=REGISTER_TOKEN_EXPIRE_MINUTES)
    register_token = create_access_token(data=new_user.to_dict(), expires_delta=register_token_expires)

    # sending an authentification Mail to the user
    try:
        sendmail(e_mail, username, register_token)
    except:
        return 'not valid mail'

    return f"registration of User: {new_user.username} was successfull"

@app.post("/login")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)
    print(user)
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
@app.post('/upload_igc')
async def upload_igc(current_user: User = Depends(get_current_active_user), file: UploadFile = File(...)):
    name, extention = os.path.splitext(file.filename)
    if extention == '.igc':
        content = file.file.read().decode(encoding='latin-1')
        # extract data from igc with the handle_igc function
        try: 
            data = handle_igc(content, 20)
        except:
            # handle files wiht wrong structure
            return 'wrongfilestructure'
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

        return 'IGC uploaded successfully'
    else:
        return 'wrongfiletype'

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
 


