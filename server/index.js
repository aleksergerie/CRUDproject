const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Alekman12",
  database: "events_db",
});

app.get("/", (req, res) => {
  res.send("Hello Express");
});

//gets all events
app.get("/api/get/events", (req, res) => {
  const sqlGet = "SELECT * FROM events";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

//gets all users profile
app.get("/api/get", (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM users";
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

//gets user profile
app.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM users WHERE id=?";
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

//update user profile
app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, birthdate, password } = req.body;
  const sqlUpdate =
    "UPDATE users SET first_name=?, last_name=?, email=?, birthdate=?, password=? WHERE id=?";
  db.query(
    sqlUpdate,
    [first_name, last_name, email, birthdate, password, id],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
});

//gets users-events table
app.get("/api/get/users-events", (req, res) => {
  const { user_id, event_id } = req.params;
  const sqlGet = "SELECT * FROM events_users";
  db.query(sqlGet, [user_id, event_id], (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

//gets event_id that user_id is going
app.get("/api/get/users-events/:user_id", (req, res) => {
  const { user_id } = req.params;
  const sqlGet =
    "SELECT * FROM events_users INNER JOIN events ON event_id = events.id WHERE user_id = ?";
  db.query(sqlGet, user_id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

//gets events by id
app.get("/api/get/events/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM events WHERE id=?";
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

//removes event user is going
app.delete("/api/remove/:user_id/:event_id", (req, res) => {
  const { user_id, event_id } = req.params;
  const sqlRemove = "DELETE FROM events_users WHERE user_id=? AND event_id=?";
  db.query(sqlRemove, [user_id, event_id], (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

//adds new user
app.post("/api/post", (req, res) => {
  const { first_name, last_name, email, birthdate, password } = req.body;
  const sqlInsert =
    "INSERT INTO users (first_name, last_name, email, birthdate, password) VALUES (?,?,?,?,?)";
  db.query(
    sqlInsert,
    [first_name, last_name, email, birthdate, password],
    (error, result) => {
      if (error) {
        console.log(error);
      }
    }
  );
});

//adds new event user is going to
app.post("/api/post/event", (req, res) => {
  const { user_id, event_id } = req.body;
  const sqlInsert =
    "INSERT INTO events_users (user_id, event_id) VALUES (?, ?)";
  db.query(sqlInsert, [user_id, event_id], (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

//gets event-user if it exist for confirmation
app.get("/api/get/users-events/:user_id/:event_id/", (req, res) => {
  const { user_id, event_id } = req.params;
  const sqlGet =
    "SELECT * FROM events_users INNER JOIN events ON user_id =? WHERE event_id = ?";
  db.query(sqlGet, [user_id, event_id], (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

/*
//gets user profile by email
app.get("/api/get/:email", (req, res) => {
  const { email } = req.params;
  const sqlGet = "SELECT * FROM users WHERE email=?";
  db.query(sqlGet,email, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});
*/
