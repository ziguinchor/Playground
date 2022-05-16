const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");

/**
 * Express is built on the native HTTP module,
 * which means res is an instance of http.ServerResponse,
 * which inherits from the writable stream interface.
 * That said, you can do this:
 */

app.use("/", (req, res) => {
  const fileReadStream = fs.createReadStream("./file.txt");
  fileReadStream.on("data", (chunk) => {
    res.write(chunk);
  });
  fileReadStream.on("end", () => {
    res.end();
  });
});

/**
 * The reason you can't use the res.send() method in Express
 * for streams is because it will use res.close()
 * automatically for you.
 */

app.listen(port, () => {
  console.log("Listening on port", port);
});
