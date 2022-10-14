
INSERT INTO events (name, date_planned, image, description, max_participants, min_age, location_id)
VALUES
    ("New in town", "2022-06-05", NULL, "New in town come make babies", 20,16,1),
    ("EatFest", "2022-08-09", NULL, "Come eat and make babies", 21,4,2);

INSERT INTO events_users (event_id, user_id)
VALUES
    (1, 2),
    (1, 1),
    (2, 1);

UPDATE events SET image="https://i.pinimg.com/736x/25/12/74/25127469da48885b8d2fb6f6437afcb4--basketball-photography-sport-photography.jpg"
WHERE id=4;


INSERT INTO events (name, date_planned, image, description, max_participants, min_age, location_id)
VALUES
    ("Mamma be thristy", "2022-09-05", "https://www.eatthis.com/wp-content/uploads/sites/4/2022/06/woman-drinking-milk.jpg?quality=82&strip=1", "Ladies night to drink milk and talk about babies", 20,16,1),
    ("Basketball for elders", "2022-05-27", NULL, "If you are old and not able to walk, this activity is for you. Come play basketball and attract old woman", 16,65,2);
    