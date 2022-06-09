const stripe = require("stripe")("sk_test_...");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Payment Service");
});

app.listen(5003, () => console.log("Listening on port 5003..."));
