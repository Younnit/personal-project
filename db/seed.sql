DROP TABLE IF EXISTS positions;
DROP TABLE IF EXISTS emails;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    password VARCHAR(1000)
);

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(5000),
    img VARCHAR(10000)
);

CREATE TABLE emails(
    email_id SERIAL PRIMARY KEY,
    email VARCHAR(150)
);

CREATE TABLE positions(
    position_id SERIAL PRIMARY KEY,
    lat DECIMAL,
    lng DECIMAL,
    username VARCHAR(100)
);
