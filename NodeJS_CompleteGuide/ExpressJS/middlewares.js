// const http = require("http");

const express = require("express");

// creates an express application.
const app = express();

app.use((req, res, next) => {
  console.log("Inside the first middleware.");
  next(); // allows request to pass to next middleware.
});
// 'use' function allows us to add new middleware functions.
// accepts array of request handlers.
// the handler/callback is executed for every incoming-request.
// 'next' is a first-order function used to pass request to next middleware in line,
// if not passed does not reach other middlewares and needs to be handled.

app.use((req, res, next) => {
  console.log("Inside the second middleware.");
  // send response...(as we are not calling next nor have any middleware to pass request.)

  // using utility function 'send', allows us to attach a body of type 'any'
  res.send("<h1>Welcome to Express!!</h1>");
});

app.listen(3000);
