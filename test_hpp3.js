const express = require("express");
const app = express();
const hpp = require("hpp");
const bodyParser = require("body-parser");
const { query, validationResult } = require("express-validator");
const { responseInterceptor } = require("http-proxy-middleware");

app.use(express.json());

app.get("/", query("firstName").isString().escape(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send(errors.array());
  }
  res.send(req.query);
  // .....
});

app.use((req, res) => {
  console.log("ok");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port ", port));
