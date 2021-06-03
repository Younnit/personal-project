DELETE FROM positions
WHERE position_id = $1
AND user = $2;
SELECT * FROM positions;