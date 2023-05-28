from sqlalchemy import *
from utils.Models import *
from sqlalchemy.orm import aliased
from utils.functions import *

engine = create_engine(f"postgresql://{DB_USER}:{DB_PASS}@localhost/{DB_NAME}", echo=True)
Base = declarative_base()

#=================================== initalize Database ==============================#
Session = sessionmaker(bind=engine)
session = Session()
#=====================================================================================#

print(is_following(4,2))



# count_followed = session.query(func.count(UserRelation.follower_id)).filter(UserRelation.follower_id == 2).scalar()

# print("followed")
# print(count_followed)


# count_follower = session.query(func.count(UserRelation.followed_id)).filter(UserRelation.followed_id == 2).scalar()

# print("follower")
# print(count_follower)

# fir = aliased(Flight_in_Region)

# # Führe die gewünschte Abfrage aus
# result = session.query(
#     fir.region_id,
#     Flight.user_id,
#     User.username,
#     func.count().label('flight_count')
# ).join(
#     Flight, Flight.flight_id == fir.flight_id
# ).join(
#     User, User.user_id == Flight.user_id
# ).group_by(
#     fir.region_id, Flight.user_id, User.username
# ).subquery()

# subquery = session.query(
#     result.c.region_id,
#     result.c.user_id,
#     result.c.username,
#     result.c.flight_count,
#     func.row_number().over(
#         partition_by=result.c.region_id,
#         order_by=result.c.flight_count.desc()
#     ).label('rn')
# ).subquery()

# final_result = session.query(
#     subquery.c.region_id,
#     subquery.c.user_id,
#     subquery.c.username,
#     subquery.c.flight_count
# ).where(subquery.c.rn == 1, subquery.c.user_id.in_([1,2]))

# json = {}

# # Durchlaufe das Ergebnis
# for row in final_result:
#     region_id = row.region_id
#     user_id = row.user_id
#     flight_count = row.flight_count
#     username = row.username
#     json[region_id] = {"count": flight_count,
#                         "user_id": user_id,
#                         "username": username}
#     # Verarbeite die Daten wie gewünscht

# print(json)