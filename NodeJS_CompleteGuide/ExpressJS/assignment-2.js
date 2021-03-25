const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("In Users middleware");
  res.send("<h1>In Users Middlware.</h1>");
});

app.use("/", (req, res, next) => {
  console.log("inside generic middleware.");
  res.send("<h1>In Generic Middlware.</h1>");
});

app.listen(3000);
