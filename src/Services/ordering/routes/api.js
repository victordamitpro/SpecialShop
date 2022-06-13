var express = require("express");
var authRouter = require("./auth");
var productRouter = require("./product");

var app = express();

app.use("/auth/", authRouter);
app.use("/product/", productRouter);

module.exports = app;