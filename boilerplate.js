const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Instanciate Router
const router = express.Router();

router.route("/").get((req, res) => {});
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
