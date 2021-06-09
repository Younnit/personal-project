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

INSERT INTO products
(name, description, img)
VALUES
('King of the Beach', 'Outdoor volleyball', 'https://cdn11.bigcommerce.com/s-cf8ys9ikz8/images/stencil/400x400/products/1531/2794/mikasa-king-of-the-beach-front__70034.1565813653.jpg?c=2'),
('Wilson AVP OPTX Ball', 'Outdoor volleyball with better eye tracking design.', 'https://cdn11.bigcommerce.com/s-cf8ys9ikz8/images/stencil/400x400/products/1538/2825/WTH00020X_0_AVP_OPTX_Game_Ball_OFFICIAL.png.cq5dam.web.1200.1200__57388.1583337949.jpg?c=2'),
('Sand Lines', 'Boundary lines used to designate the field of play. Stakes are used to hold in place.', 'https://cdn11.bigcommerce.com/s-cf8ys9ikz8/images/stencil/1280x1280/products/172/2007/Sliders-Attachments-2-Courts-Medium__09614.1494976954.jpg?c=2'),
('Outdoor Net', 'Outdoor volleyball net. Designed to withstand weather elements.', 'https://cdn11.bigcommerce.com/s-cf8ys9ikz8/images/stencil/1280x1280/products/506/442/AVP-Volleyball-Net-Large__00214.1495842278.jpg?c=2'),
('Indoor Net', 'Indoor volleyball net.', 'https://cdn11.bigcommerce.com/s-cf8ys9ikz8/images/stencil/1280x1280/products/616/2465/PIP-Indoor-WayneCarrol-Edited__35313.1518022628.jpg?c=2');
