const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();
// Router is like a mini-express-app that can be plugged into other apps.
// we can call similar utility functions on it as well.

//// Registering different routes on this router.

// full-path : /admin/add-product  method=>  GET
// but here only path after /admin is checked as previous matching is done already.
router.get("/add-product", (req, res, next) => {
  console.log("In add-products middleware : GET-Method");
  // res.send(
  //   "<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  // );

  /////// Serving HTML file :

  //res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  res.sendFile(path.join(rootDir, "../", "views", "add-product.html"));
});

// full-path : /admin/add-product  method=>  POST
router.post("/add-product", (req, res, next) => {
  console.log("In add-products middleware : P-Method");
  console.log(req.body);
  res.redirect("/");
});

// exporting router.
module.exports = router;
