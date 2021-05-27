DROP TABLE IF EXISTS user_cart_junction;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS carts;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(130),
    password VARCHAR(1000)
);

CREATE TABLE carts(
    cart_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    active BOOLEAN
);

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(5000),
    img VARCHAR(10000)
);

CREATE TABLE user_cart_junction(
    user_cart_id SERIAL PRIMARY KEY,
    cart_id INT REFERENCES carts(cart_id),
    product_id INT REFERENCES products(product_id),
    quantity INT
);