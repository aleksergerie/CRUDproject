SELECT * FROM events_users
INNER JOIN events ON event_id =  events.id
WHERE user_id = 1