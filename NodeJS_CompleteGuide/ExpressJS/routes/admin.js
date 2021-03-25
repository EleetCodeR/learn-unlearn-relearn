const express = require("express");

const router = express.Router();
// Router is like a mini-express-app that can be plugged into other apps.
// we can call similar utility functions on it as well.

// Registering different routes on this router.
router.get("/add-product", (req, res, next) => {
  console.log("In add-products middleware");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

// exporting router.
module.exports = router;
