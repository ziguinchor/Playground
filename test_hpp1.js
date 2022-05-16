const express = require("express");
const app = express();
const hpp = require("hpp");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(hpp());

app.get("/", (req, res) => {
  // res.send(req.body);
  res.send({
    query: req.query,
    pollutedd: req.queryPolluted,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port ", port));
