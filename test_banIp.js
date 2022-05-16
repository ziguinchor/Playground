const express = require("express");
const app = express();
app.use(express.json());
const bcrypt = require("bcrypt");

const HASH = "$2a$10$eaJG12wUWrlXERYn.EII2OMeRHfm4RwK/o3o5zX.BiQhB2APeMSNa";

const failedAttempts = new Map();

const login = async (u, p) => {
  // return u === "a" && p === "b";
  if (u === "a") {
    return await bcrypt.compare(p, HASH);
  }
  return false;
};

app.post("/login", async (req, res) => {
  console.log(failedAttempts);
  if (failedAttempts.get(req.ip) >= 3) {
    return res.status(403).end();
  }
  const { username, password } = req.body;
  const isValid = await login(username, password);
  if (!isValid) {
    if (!failedAttempts.get(req.ip)) {
      failedAttempts.set(req.ip, 1);
    } else {
      failedAttempts.set(req.ip, failedAttempts.get(req.ip) + 1);
    }
    return res.status(400).end();
  }
  res.status(200).end();
});

port = 3000;
app.listen(port, () => {
  console.log(`Listening on port  ${port}`);
});
