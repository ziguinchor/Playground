const express = require("express");
const app = express();
const axios = require("axios");
require("dotenv").config();

const { CHARACTER_SERVICE, LOCATION_SERVICE } = process.env;

app.use("/character/:id", (req, res) => {});

app.use("/location/:id", (req, res) => {});

app.use("/locationOfChar/:id", (req, res) => {});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port", port);
});
