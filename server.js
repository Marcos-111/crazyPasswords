const express = require("express");
const mysql = require("mysql")
const app = express();
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "LoginSystem",
});

app.post("/register", (req, res) => {

  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "INSERT INTO users (username, passwords) VALUES (?,?)",
    [username, password],
    (err, result) => {
      console.log(err)
    }
  );
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err })
      }
      else {
        if (result) {
          res.send(result)
        } else {
          res.send({ message: "Wrong username/password" })
        }
      }
    }
  );
});
app.listen(3000, () => {
  console.log("running server")
})