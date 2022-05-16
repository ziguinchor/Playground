const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Instanciate Router
const router = express.Router();

const makeUpperCase = (input) => {
  if (Array.isArray(input)) {
    return input.map((i) => String(i).toUpperCase());
  } else {
    return String(i).toUpperCase();
  }
};

router.route("/").get((req, res) => {
  res.send(makeUpperCase(req.query.name));
});

app.use("/", router);
// 404 handling
app.use((req, res) => {
  res.sendStatus(404);
});

// Error handling
app.use((err, req, res, next) => {
  res.status(500).send(err);
});
//  Listening
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
