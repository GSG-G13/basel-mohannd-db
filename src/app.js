const express = require("express");
const compression = require("compression");

const app = express();

app.disable("x-powered-by");
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

module.exports = app;
