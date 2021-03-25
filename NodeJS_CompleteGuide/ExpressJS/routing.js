const express = require("express");

const app = express();

// The route search starts matching from top-to-bottom in the file.
// Therefore 'order of middleware' and 'pattern of path' together matters.
// "/" path can match both the middlewares below, hence more specific-route should be placed at the top,
// otherwise a generic middleware at top, will never let the request to reach a specific-middleware, specially if we dont call 'next' and send response.

app.use("/", (req, res, next) => {
  console.log("This middleware always runs.");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("Add-product middleware.");
  res.send("<h1>Welcome to Express!!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Default middleware.");
  res.send("<h1>Welcome to Express!!</h1>");
});

app.listen(3000);
