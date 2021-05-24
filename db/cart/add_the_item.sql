INSERT INTO user_cart_junction
(cart_id, product_id, quantity)
VALUES
($1, $2, 1);
SELECT * FROM user_cart_junction
JOIN products ON user_cart_junction.product_id = products.product_id
WHERE user_cart_junction.cart_id = $1
ORDER BY user_cart_junction.product_id;