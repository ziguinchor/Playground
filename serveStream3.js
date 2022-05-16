const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const fs = require("fs");
const { Readable, Transform } = require("stream");

function dataStream(
  sentence = `Today is ${new Date().toLocaleString("en-us", {
    weekday: "long",
  })}`,
  milliseconds = 1500
) {
  const readStream = Readable.from(sentence.split(" "));

  const writeStream = new Transform({
    transform(chunk, encoding, callback) {
      setTimeout(callback, milliseconds, null, chunk);
    },
  });

  return readStream.pipe(writeStream);
}

app.use("/", (req, res) => {
  const stream = dataStream();
  stream.on("data", (chunk) => {
    res.write(chunk);
  });
  stream.on("end", () => {
    res.end();
  });
  stream.on("error", (err) => {
    res.send(er);
  });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
