from sqlalchemy import ForeignKey, Column, String, Integer, CHAR, Boolean, VARCHAR, ARRAY, Float, Date, UniqueConstraint
from sqlalchemy.ext.declarative import declarative_base

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import json

# Load the Informations within the Json secret File (Gitignore)
with open('./utils/secret.json') as f:
    json = json.load(f)

# Define A Class for Credentials
class Credentials:
    def __init__(self, LOGIN_KEY, DB_USER, DB_PASS, DB_NAME, MAIL_PASS, MAIL_ADDRESS, MAIL_KEY, WEBSITE_HOME, WEBSITE_LOGIN):
        self.LOGIN_KEY = LOGIN_KEY
        self.DB_USER = DB_USER
        self.DB_PASS = DB_PASS
        self.DB_NAME = DB_NAME
        self.MAIL_PASS = MAIL_PASS
        self.MAIL_ADDRESS = MAIL_ADDRESS
        self.MAIL_KEY = MAIL_KEY
        self.WEBSITE_HOME = WEBSITE_HOME
        self.WEBSITE_LOGIN = WEBSITE_LOGIN
# save Credetials

Creds = Credentials(
    LOGIN_KEY = json["LOGIN"]["KEY"],
    DB_USER = json["DB"]["USER"],
    DB_PASS = json["DB"]["PASS"],
    DB_NAME = json["DB"]["NAME"],
    MAIL_PASS = json["MAIL"]["PASS"],
    MAIL_ADDRESS = json["MAIL"]["ADDRESS"],
    MAIL_KEY = json["MAIL"]["KEY"],
    WEBSITE_HOME = json["WEBSITE"]["HOME"],
    WEBSITE_LOGIN = json["WEBSITE"]["LOGIN"]
    )

engine = create_engine(f"postgresql://{Creds.DB_USER}:{Creds.DB_PASS}@localhost/{Creds.DB_NAME}", echo=True)
Base = declarative_base()



# class Token(Base):
#     __tablename__ = "tokens"

#     token_id = Column(Integer, primary_key=True, autoincrement=True)
#     access_token = Column("access_token", String, unique=True)
#     token_type = Column("token_type", String)

#     def __init__(self, access_token, token_type):
#         self.access_token = access_token
#         self.token_type = token_type
    
#     def __repr__(self):
#         return f"Token({access_token})"

class TokenData:
    def __init__(self, username):
        self.username = username


#======================= Database related Objects | Tables ===========================#
class User(Base):
    __tablename__ = "users" # this defines the Tablename within the Posgresql database

    user_id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column("username", String, unique=True)
    e_mail = Column("e_mail", String, unique=True)
    firstname = Column("firstname", String)
    lastname = Column("lastname", String)
    password = Column("password", String)
    shv_nr = Column("shv_nr", Integer, default= None)
    verifyed = Column("verified", Boolean , default=False)    
    disabled = Column("disabled", Boolean , default=False)

    # constructor for the User class
    def __init__(self, username, e_mail, firstname, lastname, password, verifyed, disabled, shv_nr=None):
        self.username = username
        self.e_mail = e_mail
        self.firstname = firstname
        self.lastname = lastname
        self.password = password
        self.shv_nr = shv_nr
        self.verifyed = verifyed
        self.diabled = disabled

    def to_dict(self):
            return {
                "user_id": self.user_id,
                "username": self.username,
                "e_mail": self.e_mail,
                "firstname": self.firstname,
                "lastname": self.lastname,
                "password": self.password,
                "shv_nr": self.shv_nr,
                "verifyed": self.verifyed,
                "disabled": self.disabled
            }

    # this repr-function defines what you see if you print a User class
    def __repr__(self):
        return str(self.to_dict())

class Fligth(Base):
    __tablename__ = "flights"

    flight_id = Column("flight_id", Integer, primary_key=True, autoincrement=True)
    flight_name = Column("flight_name", String, default= None)
    pilot = Column(Integer, ForeignKey("users.user_id"))
    comment = Column("comment", VARCHAR, default=None)
    polyline = Column("polyline", ARRAY(Float), default= None)
    takeof = Column("takeof", String, default=None)
    landing = Column("landing", String, default=None)
    biplace = Column("biplace", String, default=None)
    date = Column("date", Date, default=None)
    img_link = Column("img_link", String, default=None)
    glider = Column("glider", String, default=None)
    wind_kmh = Column("wind_kmh", Integer, default=None)
    temp_celsius = Column("temp_celsius", Integer, default=None)

    def __init__(self, pilot, flight_name=None, comment=None, polyline=None, takeof=None, landing=None, biplace=None, date=None, img_link=None, glider=None, wind_kmh=None, temp_celsius=None):
        self.flight_name = flight_name
        self.pilot = pilot
        self.comment = comment
        self.polyline = polyline
        self.takeof = takeof
        self.landing = landing
        self.biplace = biplace
        self.date = date
        self.img_link = img_link
        self.glider = glider
        self.wind_kmh = wind_kmh
        self.temp_celsius = temp_celsius

    def __repr__(self):
        return f"Flight( {self.flight_name} {self.takeof} {self.landing} pilot: {self.pilot})"

Base.metadata.create_all(bind=engine)