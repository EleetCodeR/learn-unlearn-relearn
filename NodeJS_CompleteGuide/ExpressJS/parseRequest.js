const express = require("express");

const bodyParser = require("body-parser");
//the body-parser is used to parse request-bodies sent through a form.
// helps use avoid manual parsing using buffers etc. as we did using vanilla Node.js previously.
// for parsing files, JSON etc. we use different parsers.

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// adds a middleware (request parser-function), passed only to those middlewares following it.

app.use("/add-product", (req, res, next) => {
  console.log("In add-products middleware");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body); // won't be parsed without initializing parser above.
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>In Generic Middlware that handles / requests.</h1>");
});

app.listen(3000);
