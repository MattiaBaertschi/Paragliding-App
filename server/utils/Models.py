from sqlalchemy import ForeignKey, Column, String, Integer, CHAR, Boolean, VARCHAR, ARRAY, Float, Date, UniqueConstraint, Time, DateTime
from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy.ext.declarative import declarative_base

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, relationship

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

    # this is used for the authentification process
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

class Flight(Base):
    __tablename__ = "flights"

    flight_id = Column("flight_id", Integer, primary_key=True, autoincrement=True)
    pilot = Column(Integer, ForeignKey("users.user_id"))
    upload_date = Column("upload_date", DateTime)
    flight_name = Column("flight_name", String, default= None)
    comment = Column("comment", VARCHAR, default=None)
    gnss_records = Column("gnss_records", ARRAY(Float), default= None)
    alt_gnss = Column("alt_gnss", ARRAY(Integer), default=None)
    terrain = Column("terrain", ARRAY(Integer), default=None)
    takeoff = Column("takeoff", String, default=None)
    landing = Column("landing", String, default=None)
    start_time = Column("start_time", Time, default=None)
    end_time = Column("end_time", Time, default=None)
    duration = Column("duration", Time, default=None)
    biplace = Column("biplace", String, default=None)
    date = Column("date", Date, default=None)
    images = Column('images', JSON(String), default=[])
    glider = Column("glider", String, default=None)
    wind_kmh = Column("wind_kmh", Integer, default=None)
    temp_celsius = Column("temp_celsius", Integer, default=None)


    def __init__(self, pilot, upload_date, flight_name=None, comment=None, gnss_records=None,  alt_gnss=None,  terrain=None,  takeoff=None, landing=None,  start_time = None, end_time = None, duration = None, biplace=None, date=None,  images=None,  glider=None,  wind_kmh=None,  temp_celsius=None):
        self.flight_name = flight_name
        self.pilot = pilot
        self.upload_date = upload_date
        self.comment = comment
        self.gnss_records = gnss_records
        self.alt_gnss = alt_gnss
        self.terrain = terrain
        self.takeoff = takeoff       
        self.landing = landing
        self.start_time = start_time
        self.end_time = end_time
        self.duration = duration
        self.takeoff = takeoff
        self.landing = landing
        self.biplace = biplace
        self.date = date
        self.images = images
        self.glider = glider
        self.wind_kmh = wind_kmh
        self.temp_celsius = temp_celsius


    def to_dict(self):
        return {
            "flight_id": self.flight_id,
            "flight_name": self.flight_name,
            "upload_date": self.upload_date,
            "pilot": self.pilot,
            "comment": self.comment,
            "gnss_records": self.gnss_records,
            "alt_gnss": self.alt_gnss,
            "terrain": self.terrain,
            "takeoff": self.takeoff,
            "landing": self.landing,
            "start_time": self.start_time,
            "end_time": self.end_time,
            "duration": self.duration,
            "biplace": self.biplace,
            "date": self.date,
            "images": self.images,
            "glider": self.glider,
            "wind_kmh": self.wind_kmh,
            "temp_celsius": self.temp_celsius
        }
    
    def to_dict_users_view(self):
        return{
            "flight_id": self.flight_id,
            "flight_name": self.flight_name,
            "upload_date": self.upload_date,
            "date": self.date,
            "takeoff": self.takeoff,
            "landing": self.landing,
            "duration": self.duration,
        }

    def __repr__(self):
        return f"Flight( {self.flight_name} {self.takeoff} {self.landing} pilot: {self.pilot})"


class UserRelation(Base):
    __tablename__ = 'user_relations'

    user_relations_id = Column("user_relations_id", Integer, primary_key=True, autoincrement=True)
    follower_id = Column("follower_id", Integer, ForeignKey("users.user_id"))
    followed_id = Column(Integer, ForeignKey("users.user_id"))
    accepted = Column(Boolean)

    def __init__ (self, follower_id, followed_id, accepted):
        self.follower_id = follower_id
        self.followed_id = followed_id
        self.accepted = accepted

    def __repr__(self):
        return f"{self.followed_id}"


Base.metadata.create_all(bind=engine)