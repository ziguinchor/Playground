const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const port = process.env?.PORT || 3000;
// allows us to work with files and directorie path
const events = require("events");
const utils = require("util");

const Person = function (name) {
  this.name = name;
};
utils.inherits(Person, events.EventEmitter);

const james = new Person("James");

james.on("call", (question) => {
  console.log("Hi, it's james \n", question);
});

james.emit("call", "what do you want?");
