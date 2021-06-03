DELETE FROM positions
WHERE position_id = $1
AND username = $2;
SELECT * FROM positions;