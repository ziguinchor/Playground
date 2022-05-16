const express = require("express");
const { boat } = require("./model");
const app = express();

app.use(express.json());

const router = express.Router();

router.route("/").post((req, res) => {
  const id = boat.uid();
  boat.create(id, req.body, (err, data) => {
    if (err) {
      if (err.code === "E_RESOURCE_EXISTS") return res.sendStatus(400);
      res.send(err);
    }
    res.send(data);
  });
});

router
  .route("/:id")
  .get((req, res) => {
    boat.read(req.params.id, (err, data) => {
      if (err) {
        if (err.code === "E_NOT_FOUND") return res.send(404);
      }
      res.send(data);
    });
  })
  .delete((req, res) => {
    boat.del(req.params.id, (err, data) => {
      if (err) {
        if (err.code === "E_NOT_FOUND") return res.sendStatus(404);
        res.sendStatus(400);
      }
      res.send(data);
    });
  })
  .put((req, res) => {
    boat.update(req.params.id, req.body, (err, data) => {
      if (err) {
        if (err.code === "E_NOT_FOUND") {
          return req.sendStatus(400);
        }
        return res.sendStatus(400);
      }
      res.send(data);
    });
  });
app.use("/", router);

app.listen(3000, () => {
  console.log("Listening");
});
