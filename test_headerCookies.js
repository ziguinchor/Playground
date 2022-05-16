const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const JWTSECRET = "ALOLACAGE";
app.use(cookieParser());

const login = (u, p) => {
  return u === "a" && p === "a";
};

const users = {
  1: { username: "Ahmed", email: "admin@gmail.com" },
};

app.post("/", (req, res) => {
  const { username, password } = req.body;
  const isValid = login(username, password);
  if (!isValid) {
    return res.sendStatus(400);
  }
  const user = users[1];
  const token = jwt.sign(
    {
      username: user.username,
      email: user.email,
    },
    JWTSECRET
  );
  res.set("X-Auth-Token", token);
  res.cookie("Token", token);
  res.sendStatus(201);
});

app.get("/", (req, res) => {
  res.send(req.cookies.Token);
});

app.listen(3000, () => {
  console.log("Listening");
});
