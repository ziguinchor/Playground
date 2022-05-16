const express = require("express");
const app = express();
require("dotenv").config();

function fib(d) {
  return 120;
}

app.get("/calculate-fibonacci", (req, res) => {
  const { digit } = req.query;
  if (!digit || !Number.isInteger(parseInt(digit)))
    return res.status(400).send();
  if (Object.keys(req.query).length > 1) return res.status(406).send();
  if (digit > 50) return res.status(413).send();
  res.send({
    digit,
    result: fib(digit),
  });
});

app.use((req, res) => {
  res.status(404).send();
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening on port ", port);
});
