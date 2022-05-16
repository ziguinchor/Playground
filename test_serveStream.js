const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const readabeStream = fs.createReadStream("./file.txt");
  // readabeStream.on("data", (chunk)) {
  //   res.write(data);
  // }
  readabeStream.pipe(res);
  readabeStream.on("error", (err) => {
    throw err;
  });
});

app.listen(3000, () => console.log("Listening"));
