from fastapi import Depends, FastAPI, File, UploadFile, Form, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
import psycopg2
from utils.handle_igc import handle_igc
import numpy as np
from pydantic import BaseModel
from datetime import datetime, timedelta
from jose import jwt, JWTError
#from passlib.context import CryptContext


#--------------------------- Setup for secure transfer -------------------------------#
SECRET_KEY = "9339e87a096bf66cc23ea859614879384c1e82e8c31f62af45cddb90e3b191a3"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


# TEST DB
db = {
    "tim":{
        "username": "tim",
        "full_name": "Tim von Felten",
        "email": "tim.vonfelten@students.fhnw.ch",
        "hashed_password": "$2b$12$3jcI2voZtHOCfTRdO3uZdOGlkW5QKR62YFb6LXev3pkzKqlholTd6", 
        "disabled": False
    }
}

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str or None = None

class User(BaseModel):
    username: str
    email: str or None = None
    full_name: str or None = None
    disabled: bool or None = None

class UserInDB(User):
    hashed_password: str

# pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
OAuth_2_scheme = OAuth2PasswordBearer(tokenUrl="token")
#-------------------------------------------------------------------------------------#


# connect to the Database
conn = psycopg2.connect("dbname=flugbuch user=postgres password=e3jf9sp_39")
 
#  # create cursor to execute database operations
#  cur = conn.cursor()
 
#  # execute querry
#  cur.execute("SELECT polyline,flight_id, user_id, takeof, landing, biplace, date, glider FROM flight WHERE flight_id = 10")
#  records = cur.fetchall()
#  cur.execute("SELECT polyline FROM flight WHERE flight_id = 10")
#  polyline = cur.fetchall()


app = FastAPI()

#--------------------- Alow the Frontent to connet to the API ---------------------#
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#----------------------------------------------------------------------------------#



#------------------------ Functions for the Login process--------------------------#

# def verify_password(pLain_password, hashed_password):
#     return pwd_context.verify(pLain_password, hashed_password)

def verify_password(entered_password, stored_password):
    if entered_password == stored_password:
        return True
    return False

#def get_password_hash(password):
#    return pwd_context.hash(password)

def get_user(db, username: str):
    if username in db:
        user_data = db[username]
        return UserInDB(**user_data)

def authenticate_user(db, username: str, password: str):
    user = get_user(db, username)
    if not get_user(db,username):
        return False
    if not verify_password(password, user.hashed_password):
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

    user = get_user(db, username=token_data.username)
    if user is None:
        raise credential_exeption

    return user

async def get_current_active_user(current_user: UserInDB = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


@app.post("/login", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Could not validate credentials", headers={"WWW-Authenticate":"Bearer"})
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires)
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/users/me", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user

@app.get("/users/me/items")
async def read_own_items(current_user: User = Depends(get_current_active_user)):
    return [{"item_id":1, "owner": current_user}]


# Just a code sinppet to check if the DB connetion is working
@app.get("/")
async def root():
    cur = conn.cursor()
    cur.execute("SELECT user_id FROM users")
    rec = cur.fetchall()
    return rec



#Single Image Upload --------------------------------------------------------------
    # @app.post('/upload_image')
    # async def upload_image(file: UploadFile = File(...)):
    #     allowedFiles = {"image/jpeg", "image/png", "imgage/gif","image/tiff", "image/bmp", "video/webm"}
    #     if file.content_type in allowedFiles:
    #         filename = file.filename
    #         with open(os.path.join('./data/image', filename), 'wb') as buffer:
    #             shutil.copyfileobj(file.file, buffer)
    #         return 'Photo uploaded successfully'
    #     else:
    #         return 'wrongfiletype'
# ----------------------------------------------------------------------------------



# Upload / change Items
@app.post('/multi_image')
async def mulit_image(files: list[UploadFile] = File(...), user_id: str = Form(...)):
        allowed_files = {"image/jpeg", "image/png", "image/gif", "image/tiff", "image/bmp", "video/webm"}
        bad_files = []
        for f in files:
            if f.content_type not in allowed_files:
                bad_files.append(f.filename)
        if len(bad_files) > 0:
            return f'Wrong file types: {bad_files}'
        else:
            for f in files:
                filename = f.filename
                with open(os.path.join('./data/image', filename), 'wb') as buffer:
                    shutil.copyfileobj(f.file, buffer)
            return 'Photos uploaded successfully'


# Upload IGC
@app.post('/upload_igc')
async def upload_igc(file: UploadFile = File(...), user_id: str = Form(...)):
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
        filepath = os.path.join('./data/igc', f'{date}_{user_id}.igc')
        with open(filepath, 'w', encoding='latin-1') as f:
            content = content.replace('\r', '')
            f.write(content)
        
        coord = data['coord'].tolist()
        # store data in Database
        cur = conn.cursor()
        # Build the array string dynamically
        array_string = "ARRAY[" + ", ".join(["ARRAY" + str(x) for x in coord]) + "]"
        # Execute the insert statement with the array string
        cur.execute(f'''INSERT INTO flight(flight_name, user_id, comment, polyline, takeof, landing, biplace, date, img_link, glider, wind_kmh, temp_celsius)
            VALUES ('test_01', {user_id}, 'comment', {array_string}, '{data['takeoff']}', '{data['landing']}', 'biplace', '17-04-2023', 'img_link', 'glider', 20, 25)''')

        # Commit the transaction
        conn.commit()

        # Close the cursor and connection
        cur.close()

        return 'IGC uploaded successfully'
    else:
        return 'wrongfiletype'
