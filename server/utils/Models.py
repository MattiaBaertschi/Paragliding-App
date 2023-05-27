from sqlalchemy import ForeignKey, Column, String, Integer, CHAR, Boolean, VARCHAR, ARRAY, Float, Date, UniqueConstraint, Time, DateTime
from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy.ext.declarative import declarative_base

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, relationship, backref

import json



# Read the GeoJSON file
with open('./data/hexagon_swiss_10km_wgs84_reform.geojson') as f:
    geojson = json.load(f)

# Load the Informations within the Json secret File (Gitignore)
with open('./utils/secret.json') as f:
    json = json.load(f)

# Define Credentials
LOGIN_KEY = json["LOGIN"]["KEY"]
DB_USER = json["DB"]["USER"]
DB_PASS = json["DB"]["PASS"]
DB_NAME = json["DB"]["NAME"]
MAIL_PASS = json["MAIL"]["PASS"]
MAIL_ADDRESS = json["MAIL"]["ADDRESS"]
MAIL_KEY = json["MAIL"]["KEY"]
WEBSITE_REGISTER = json["WEBSITE"]["REGISTER"]
WEBSITE_LOGIN = json["WEBSITE"]["LOGIN"]
IMAGE_PATH = json["IMAGE_PATHS"]["IMAGE_PATH"]
PROFILE_PICT_PATH = json["IMAGE_PATHS"]["PROFILE_PICT_PATH"]


engine = create_engine(f"postgresql://{DB_USER}:{DB_PASS}@localhost/{DB_NAME}", echo=True)
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
    profile_picture = Column("profile_picture", String, default= None)
    verifyed = Column("verified", Boolean , default=False)    
    disabled = Column("disabled", Boolean , default=False)

        
    # Define relationship to UserRelation
    user_relations_as_follower = relationship("UserRelation", back_populates="follower", foreign_keys="[UserRelation.follower_id]", cascade="all,delete")
    user_relations_as_followed = relationship("UserRelation", back_populates="followed", foreign_keys="[UserRelation.followed_id]", cascade="all, delete")


    # constructor for the User class
    def __init__(self, username, e_mail, firstname, lastname, password, verifyed, disabled, profile_picture=None, shv_nr=None):
        self.username = username
        self.e_mail = e_mail
        self.firstname = firstname
        self.lastname = lastname
        self.password = password
        self.shv_nr = shv_nr
        self.profile_picture = profile_picture
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
                "disabled": self.disabled,
                "profile_picture": self.profile_picture
            }

    def to_dict_display(self):
            return {
                "user_id": self.user_id,
                "username": self.username,
                "firstname": self.firstname,
                "lastname": self.lastname,
                "profile_picture": self.profile_picture
            }

    def to_dict_all_users(self):
            return {
                "user_id": self.user_id,
                "username": self.username,
                "firstname": self.firstname,
                "lastname": self.lastname,
            }

    # this repr-function defines what you see if you print a User class
    def __repr__(self):
        return str(self.to_dict())

class UserRelation(Base):
    __tablename__ = 'user_relations'

    user_relations_id = Column("user_relations_id", Integer, primary_key=True, autoincrement=True)
    follower_id = Column("follower_id", Integer, ForeignKey("users.user_id", ondelete="CASCADE"))
    followed_id = Column("followed_id", Integer, ForeignKey("users.user_id", ondelete="CASCADE"))
    accepted = Column(Boolean)

    follower = relationship("User", back_populates="user_relations_as_follower", foreign_keys=[follower_id])
    followed = relationship("User", back_populates="user_relations_as_followed", foreign_keys=[followed_id])

    __table_args__ = (
    UniqueConstraint('follower_id', 'followed_id', name='_follower_followed_uc'),
    )

    def __init__ (self, follower_id, followed_id, accepted):
        self.follower_id = follower_id
        self.followed_id = followed_id
        self.accepted = accepted

    def __repr__(self):
        return f"{self.followed_id}"


class Flight(Base):
    __tablename__ = "flights"

    flight_id = Column("flight_id", Integer, primary_key=True, autoincrement=True)
    user_id = Column("user_id", Integer, ForeignKey("users.user_id", ondelete="CASCADE"))
    upload_date = Column("upload_date", DateTime)
    flight_name = Column("flight_name", String, default= None)
    comment = Column("comment", VARCHAR, default=None)
    gnss_records = Column("gnss_records", ARRAY(Float), default= None)
    gnss_records_simple = Column("gnss_records_simple", ARRAY(Float), default= None)
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


    def __init__(self, user_id, upload_date, flight_name=None, comment=None, gnss_records=None,  alt_gnss=None,  terrain=None,  takeoff=None, landing=None,  start_time = None, end_time = None, duration = None, biplace=None, date=None,  images=None,  glider=None,  wind_kmh=None,  temp_celsius=None, gnss_records_simple=None):
        self.flight_name = flight_name
        self.user_id = user_id
        self.upload_date = upload_date
        self.comment = comment
        self.gnss_records = gnss_records
        self.gnss_records_simple = gnss_records_simple
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
            "user_id": self.user_id,
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

    def to_dict_edit(self):
         return {
            "flight_id": self.flight_id,
            "flight_name": self.flight_name,
            "upload_date": self.upload_date,
            "user_id": self.user_id,
            "comment": self.comment,
            "gnss_records_simple": self.gnss_records_simple,
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
    
    def to_dict_all_flights(self):
         return {
            "flight_id": self.flight_id,
            "flight_name": self.flight_name,
            "upload_date": self.upload_date,
            "date": self.date,
            "user_id": self.user_id,
            "takeoff": self.takeoff,
            "landing": self.landing,
            "duration": self.duration
        }

    def __repr__(self):
        return f"Flight( {self.flight_name} {self.takeoff} {self.landing} user_id: {self.user_id})"


class Regions(Base):
    __tablename__ = 'regions'

    region_id = Column("region_id", Integer, primary_key=True, unique=True)
    name = Column("name", String)

    def __init__(self, region_id, name=None):
            self.region_id = region_id
            self.name = name


class Flight_in_Region(Base):
    __tablename__ = 'flight_in_region'
    id = Column("id", Integer, primary_key=True, autoincrement=True)
    region_id = Column("region_id", Integer, ForeignKey("regions.region_id", ondelete="CASCADE"))
    flight_id = Column("flight_id", Integer, ForeignKey("flights.flight_id", ondelete="CASCADE"))
    region = relationship("Regions")
    flight = relationship("Flight")
    
    
    def __init__(self, region_id, flight_id):
        self.region_id = region_id
        self.flight_id = flight_id



Base.metadata.create_all(engine)

# Create a session
Session = sessionmaker(bind=engine)
session = Session()

if not session.query(Regions).first():
    # Iterate over the JSON data and insert rows into the table
    # geojson = geojson["polygons"] # for the import of regions
    for feature in geojson['features']:
        properties = feature['properties']
        entry = Regions(region_id=properties['Region'], name=properties['Name'])
        session.add(entry)
    
    session.commit()
    session.close()