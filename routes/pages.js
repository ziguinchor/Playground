const fs = require("fs");
const path = require("path");
const { CLIENT_RENEG_LIMIT } = require("tls");
// allows us to work with files and directorie path

const content = "dummy data";
fs.writeFile("file.txt", content, (err) => {
  if (err) return console.log("error", err);
  console.log("File created!");
});
console.log("done");

/**
 *
 */

/**
 * https://coursehunter.net/course/frontendmaster-networking-streams
 *
 */
