const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

function login(username, password) {
  return username === "a" && password === "a";
}

const faillAttempts = new Map();

app.post("/login", (req, res) => {
  console.log(req.connection);
  if (faillAttempts.get(req.ip) > 3) {
    return res.sendStatus(403);
  }
  const isValidCredentais = login(req.body.username, req.body.password);
  if (!isValidCredentais) {
    if (faillAttempts.get(req.ip)) {
      faillAttempts.set(req.ip, faillAttempts.get(req.ip) + 1);
    } else {
      faillAttempts.set(req.ip, 1);
    }
    return res.sendStatus(403);
  } else {
    res.sendStatus(200);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port ", port);
});
