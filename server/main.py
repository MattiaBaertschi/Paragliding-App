from utils.functions import *
from datetime import date

from utils.handle_igc import handle_igc


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


#================================================= Registration and Verifycation ==================================================#


# --- Registration --- #

@app.post('/api/register')
async def register(username:str = Query(..., encoding="utf-8"),
                   e_mail:str = Query(..., encoding="utf-8"),
                   firstname:str = Query(..., encoding="utf-8"),
                   lastname:str = Query(..., encoding="utf-8"),
                   password: str = Query(..., encoding="utf-8"),
                   shv_nr:int = None):
    try:
        # Validiere die Eingabe
        # if not is_valid_input(username, e_mail, firstname, lastname, password, shv_nr):
        #     raise HTTPException(status_code=400, detail='Ungültige Eingabe')
        try:
            # Versuche, den neuen Benutzer zur Datenbank hinzuzufügen
            new_user = User(username=username,
                            e_mail=e_mail, firstname=firstname,
                            lastname=lastname,
                            password=password,
                            shv_nr=shv_nr,
                            verifyed=False,
                            disabled=False)
        except:
            raise HTTPException(status_code=400, detail='Ungültige Eingabe')
        session.add(new_user)
        session.commit()

        register_token_expires = timedelta(minutes=REGISTER_TOKEN_EXPIRE_MINUTES)
        register_token = create_access_token(data=new_user.to_dict(), expires_delta=register_token_expires)

        # sending an authentification Mail to the user
        try:
            sendmail(e_mail, username, register_token)
        except:

            raise HTTPException(status_code=400, detail='Ungültige E-Mail')

        return f'registration of User: {new_user.username} was successfull'
    
    except IntegrityError as e:
        session.rollback()
        print(f'Integrity Error: {str(e)}')  # Print the exception message
        if 'UniqueViolation' in str(e) and 'users_username' in str(e):
            raise HTTPException(status_code=400, detail='Der Benuztername existiert bereits')
        elif 'UniqueViolation' in str(e) and 'users_e_mail' in str(e):
            raise HTTPException(status_code=400, detail='Die E-Mail adresse ist bereits registriert')
        elif 'UniqueViolation' in str(e) and 'shv_nr' in str(e):
            raise HTTPException(status_code=400, detail='Die eingegebene SHV Nr ist existiert bereits')
        else:
            print(f'Integrity Error: {str(e)}')
            raise HTTPException(status_code=500, detail='Internal server error')


# --- Verification --- #

@app.get('/api/verify/{register_token}')
def verify(register_token, request: Request):
    try:
        payload = jwt.decode(register_token, SECRET_KEY, algorithms=[ALGORITHM])
        user = payload.get('username')
        user_to_update = session.query(User).filter_by(username=user).first()
        user_to_update.verifyed = True
        session.commit()
        return templates.TemplateResponse('verifyed.html',
                                            context={'request': request, 'page': WEBSITE_LOGIN})
    except:
        return templates.TemplateResponse('verifycation_error.html',
                                            context={'request': request, 'page': WEBSITE_REGISTER})
#==================================================================================================================================#



#============================================================= Login ==============================================================#
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
    return {'access_token': access_token, 'token_type': 'bearer', 'user_id': user.user_id}
#==================================================================================================================================#



#=========================================================== IGC Upload ===========================================================#
@app.post('/api/upload_igc')
async def upload_igc(current_user: User = Depends(get_current_active_user), file: UploadFile = File(...)):
    name, extention = os.path.splitext(file.filename)
    if extention == '.igc' or '.IGC':
        content = file.file.read().decode(encoding='latin-1')
        new_flight = handle_igc(content,current_user.user_id)
        try: 
            # extract data from igc with the handle_igc function
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

        flight_id = new_flight.flight_id

        update_flight_region(new_flight.gnss_records_simple, flight_id)
                
        return new_flight.flight_id
    else:
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE,
                            detail='wrongfiletyp')
#==================================================================================================================================#

#======================================================= Delete Flight ============================================================#
@app.post('/api/delete_flight')
async def delete_flight(  flight_id: int,
                        current_user: User = Depends(get_current_active_user)):
    is_users_flight(current_user.user_id, flight_id)
    try:
        flight = delete(Flight).where(Flight.flight_id == flight_id)
        session.execute(flight)
        return "flight deleted"
    except:
        return "error"
#==================================================================================================================================#

#========================================================= Profile Picture ========================================================#
# --- Upload --- #

@app.post('/api/upload_profile_picture')
async def upload_profile_picture(  file: UploadFile = File(...),
                        current_user: User = Depends(get_current_active_user)):
    allowed_files = {"image/jpeg", "image/png", "image/gif", "image/tiff", "image/bmp", "video/webm"}
    if file.content_type not in allowed_files:
        return f'Wrong file types: {bad_files}'
    else:
        # try:
        create_profile_picture(file, current_user.user_id)
        return 'profile picture uploaded successfully'
        # except:
        #     return 'error'

# --- Delete --- #
@app.post('/api/delete_profile_picture')
async def delete_profile_picture(current_user: User = Depends(get_current_active_user)):
    user = session.query(User).filter_by(user_id=current_user.user_id).first()
    # check for existing profile picture and delete them
    if user.profile_picture:
        os.remove(PROFILE_PICT_PATH+"/"+user.profile_picture)
        user.profile_picture = None
        session.add(user)
        session.commit()
        session.rollback()
        return 'profile picture deleted'
    else:
        return 'no profile picture found'

#==================================================================================================================================#

#===================================================== Edit Flight Attributes =====================================================#
@app.post('/api/edit_flight')
async def edit_flight(  flight_id:int,
                        flight_name=None,
                        comment: str=None,
                        glider: str=None,
                        takeoff: str=None,
                        landing: str=None,
                        date: date=None,
                        current_user: User = Depends(get_current_active_user)):
    try:
        is_users_flight(current_user.user_id, flight_id)
        flight = session.query(Flight).filter_by(flight_id=flight_id).first()
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
        if flight.images:
            flight.images = flight.images
        else:
            flight.images = []

        session.add(flight)
        session.commit()
        return "update succesfull"
    except:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                    detail='error')
#==================================================================================================================================#


#================================================= Upload And Delete Images =======================================================#


# --- Uplaod Images --- #

@app.post('/api/upload_flight_image')
async def mulit_image(  flight_id: int,
                        files: list[UploadFile] = File(...),
                        current_user: User = Depends(get_current_active_user)):
    #╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼
    MAXIMAL_AMOUNT_OF_IMAGES_PER_FLIGHT = 5
    #╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼
    is_users_flight(current_user.user_id, flight_id)
    allowed_files = {"image/jpeg", "image/png", "image/gif", "image/tiff", "image/bmp", "video/webm"}
    bad_files = []
    for f in files:
        if f.content_type not in allowed_files:
            bad_files.append(f.filename)
    if len(bad_files) > 0:
        return f'Wrong file types: {bad_files}'
    else:
        update_image_list(flight_id, MAXIMAL_AMOUNT_OF_IMAGES_PER_FLIGHT, files, current_user)
        return 'Photos uploaded successfully'


# --- Delete Images --- #

@app.post('/api/delete_flight_image')
async def delete_image(flight_id: int,
                        images: List[str],
                        current_user: User = Depends(get_current_active_user)):
    is_users_flight(current_user.user_id, flight_id)
    try:
        for i in images:
            os.remove(IMAGE_PATH+"/"+i)
            update_image_list_delete(flight_id, i)
        return "images removed"
    except:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                        detail='error')
#==================================================================================================================================#



#=================================================== Social Network Connection ====================================================#
@app.post('/api/follow_request')
async def request_follow(followed_id: int, current_user: User = Depends(get_current_active_user)):
    follower_id = current_user.user_id

    if followed_id == follower_id:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail='Sie können sich nicht selbst folgen'
        )

    try:
        check = session.query(UserRelation).filter_by(follower_id=follower_id, followed_id=followed_id).first()
        print(type(check))
        print("check")
    except:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail='kein zugriff auf db'
        )

    if check is None:
        # Handle the case when the combination doesn't exist
        new_relation = UserRelation(follower_id, followed_id, False)
        session.add(new_relation)
        session.commit()
        return "request sent successfully" 
    else:
        # Handle the case when the combination exists
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail='Sie folgen der Benuztenden Person bereis'
        )


@app.post('/api/accept_follow_request')
async def request_follow(   follower_id: int,
                            current_user: User = Depends(get_current_active_user)):
    try:
        relation = session.query(UserRelation).filter_by(follower_id=follower_id, followed_id=current_user.user_id).first()
        if relation:
            relation.accepted = True
            session.add(relation)
            session.commit()
            return "request successfully accepted"
        else:
            return "there was no request"
    except:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT,
            detail=f'error')

#==================================================================================================================================#




#====================================================== Display Content ===========================================================#

# --- Display A Specific Flight --- #

@app.get('/api/get_flight_detail')
async def get_flight_detail(   flight_id:int,
                        current_user: User = Depends(get_current_active_user)):
    is_users_flight(current_user.user_id, flight_id)
    flight = session.query(Flight).filter_by(flight_id = flight_id).first()
    username = session.query(User.username).filter_by(user_id = current_user.user_id).first()
    data = flight.to_dict()
    data.update({'username':username[0]})
    return data

@app.get('/api/get_flight_detail_of_followed')
async def get_flight_detail_of_followed(   flight_id:int,
                                            current_user: User = Depends(get_current_active_user)):
    pilot = session.query(Flight.user_id).filter_by(flight_id=flight_id)
    is_following(current_user.user_id, pilot)

    flight = session.query(Flight).filter_by(flight_id = flight_id).first()
    username = session.query(User.username).filter_by(user_id = pilot).first()
    data = flight.to_dict()
    data.update({'username':username[0]})
    return data

@app.get('/api/get_flight_edit')
async def get_flight_edit(   flight_id:int,
                        current_user: User = Depends(get_current_active_user)):
    is_users_flight(current_user.user_id, flight_id)
    flight = session.query(Flight).filter_by(flight_id = flight_id).first()
    data = flight.to_dict_edit()
    return data

@app.get('/api/feed')
async def get_feed(current_user: User = Depends(get_current_active_user)):
    #╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼
    AMOUNT_OF_DISPLAYED_FLIGHTS = 10
    #╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼

    json = get_flights_for_feed(current_user.user_id, AMOUNT_OF_DISPLAYED_FLIGHTS)

    return json

@app.get('/api/display_flights_of_followed')
async def distplay_flights_of_followed( followed_id:int,
                                        current_user: User = Depends(get_current_active_user)):
    is_following(current_user.user_id, followed_id)
    buddys_flights = session.query(Flight).filter_by(user_id=followed_id).all()
    count = len(buddys_flights)
    json = to_json_all_flights(buddys_flights)

    return json

@app.get('/api/users_flights')
async def get_users_flights(current_user: User = Depends(get_current_active_user)):
    flights = (session.query(Flight)
                    .filter(Flight.user_id == current_user.user_id)
                    .order_by(desc(Flight.upload_date))
                    .all())
    json = {}
    for i in flights:
        json[i.flight_id] = i.to_dict_users_view()
    return json

@app.get('/api/userprofile')
async def get_userprofile(current_user: User = Depends(get_current_active_user)):
    user = userprofile_stats(current_user.user_id)
    return user

@app.get('/api/userprofile_other_user')
async def get_userprofile_other_user(  user_id:str,
                                        current_user: User = Depends(get_current_active_user)):
    user = userprofile_stats(user_id)
    return user

@app.get('/api/flight_in_region')
async def get_flight_in_region(current_user: User = Depends(get_current_active_user)):
    json = get_flights_per_region_for_user(current_user.user_id)
    return json

@app.get('/api/most_flights_per_region')
async def most_flights_per_region(current_user: User = Depends(get_current_active_user)):
    # Perform the grouping and counting using SQLAlchemy's group_by() and func.max() functions
    buddys_and_me = get_buddys_and_me(current_user.user_id)
    
    most_flights_per_region_json = get_most_flights_per_region(buddys_and_me)

    return most_flights_per_region_json

@app.get('/api/display_all_flights')
async def get_all_flights(current_user: User = Depends(get_current_active_user)):
    
    buddys_and_me = get_buddys_and_me(current_user.user_id)

    flights = (session.query(Flight)
                    .filter(Flight.user_id.in_(buddys_and_me))
                    .order_by(desc(Flight.upload_date))
                    .all())

    return to_json_all_flights(flights)

@app.get('/api/display_all_users')
async def get_all_users(current_user: User = Depends(get_current_active_user)):
    user = session.query(User).all()  

    return to_json_all_users(user)

@app.get('/api/display_requests')
async def get_requests(current_user: User = Depends(get_current_active_user)):
    user_id = int(current_user.user_id)
    follow_request_id = session.query(UserRelation.follower_id).filter(UserRelation.accepted == False, UserRelation.followed_id == user_id).all()
    follow_request_id = [row[0] for row in follow_request_id]

    follow_request_user = session.query(User.username,User.user_id, User.firstname, User.lastname).where(User.user_id.in_(list(follow_request_id))).all()

    # Convert objects to dictionaries
    follow_request_user_dict = [
        {
            'username': user.username,
            'user_id': user.user_id,
            'firstname': user.firstname,
            'lastname': user.lastname
        }
        for user in follow_request_user
    ]

    return follow_request_user_dict

@app.get('/api/display_all_followers')
async def display_all_followers(current_user: User = Depends(get_current_active_user)):
    user_id = int(current_user.user_id)
    follower_ids = session.query(UserRelation.follower_id).filter(UserRelation.accepted == True, UserRelation.followed_id == user_id).all()
    follower_ids = [row[0] for row in follower_ids]

    followers = session.query(User).where(User.user_id.in_(list(follower_ids))).all()
    
    # Convert objects to dictionaries
    followers_dict = [
        {
            'username': follower.username,
            'profile_picture': follower.profile_picture,
            'user_id': follower.user_id,
            'firstname': follower.firstname,
            'lastname': follower.lastname
        }
        for follower in followers
    ]

    return followers_dict

@app.get('/api/display_all_followed')
async def display_all_followed(current_user: User = Depends(get_current_active_user)):
    user_id = int(current_user.user_id)
    followed_ids = session.query(UserRelation.followed_id).filter(UserRelation.accepted == True, UserRelation.follower_id == user_id).all()
    followed_ids = [row[0] for row in followed_ids]

    followed = session.query(User).where(User.user_id.in_(list(followed_ids))).all()
    
    # Convert objects to dictionaries
    followed_dict = [
        {
            'username': followed.username,
            'profile_picture': followed.profile_picture,
            'user_id': followed.user_id,
            'firstname': followed.firstname,
            'lastname': followed.lastname
        }
        for followed in followed
    ]

    return followed_dict



#==================================================================================================================================#
