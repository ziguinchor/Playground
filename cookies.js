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

const validateCookie = (req, res, next) => {
  if ("session_id" in req.cookies) {
    if (req.cookies.session_id === "mySecret") {
      next();
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(403);
  }
};

router.route("/").get(validateCookie, (req, res) => {
  res.send("ok");
});

router.route("/get").get((req, res) => {
  res.cookie("session_id", "mySecret");
  res.sendStatus(201);
});
// Use router
app.use("/", router);

// 404 handling
app.use((req, res) => {
  res.sendStatus(404);
});

// Error handling
app.use((err, req, res, next) => {
  res.sendStatus(500);
});
//  Listening
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
