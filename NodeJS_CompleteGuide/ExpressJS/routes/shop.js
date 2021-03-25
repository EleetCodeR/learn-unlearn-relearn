const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>In Generic Middlware that handles / requests.</h1>");
});

module.exports = router;
