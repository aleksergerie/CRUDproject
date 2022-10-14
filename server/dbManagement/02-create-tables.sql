CREATE TABLE events_users(
    event_id INT REFERENCES events ON DELETE CASCADE,
    user_id INT REFERENCES users ON DELETE CASCADE,
    PRIMARY KEY (event_id, user_id)
);

CREATE TABLE events (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL CHECK (LENGTH(name) > 5),
    date_planned TIMESTAMP NOT NULL,
    image VARCHAR(500),
    description TEXT NOT NULL,
    min_age INT CHECK (min_age > 0),
    max_participants INT CHECK (max_participants > 0),
    location_id INT REFERENCES locations ON DELETE CASCADE
    
);

CREATE TABLE cities (
    name VARCHAR(200) PRIMARY KEY
);

CREATE TABLE locations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200),
    street VARCHAR(300) NOT NULL,
    house_number VARCHAR(15) NOT NULL,
    postal_code VARCHAR(15) NOT NULL,
    city_name VARCHAR(200) REFERENCES cities ON DELETE RESTRICT
);

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    birthdate DATE NOT NULL,
    email VARCHAR(300) NOT NULL
    
);