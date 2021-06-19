var express = require('express');
var app = express();

var response = "Hello json".toUpperCase(); // now becomes "HELLO JSON"

if (process.env.VAR_NAME === "allCaps") {
  response = "Hello json".toUpperCase();
} else {
  response = "Hello json";
}
































 module.exports = app;
