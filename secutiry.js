const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const HASH = "$2a$10$ODtXlA0ocwDf6zWYK//NNO.eyxSKhxq.yEodihmF7vR7ALrs6zWeC";

async function login(username, password) {
  // return username === "node" && password === "dev"
  if (username === "node") {
    return await bcrypt.compare(password, HASH);
  }
  return false;
}

const failedAttempts = new Map();

app.post("/login", async (req, res) => {
  if (failedAttempts.get(req.ip) > 3) {
    return res.status(500).send();
  }
  const { username, password } = req.body;
  if (!username || !password) return res.status(401).send();
  const isValidLogin = await login(username, password);
  if (!isValidLogin) {
    if (!failedAttempts.get(req.ip)) failedAttempts.set(req.ip, 1);
    else failedAttempts.set(req.ip, failedAttempts.get(req.ip) + 1);
    return res.status(401).send();
  }
  res.status(200).send();
});

app.use((req, res) => {
  res.sendStatus(404);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port ", port);
});
