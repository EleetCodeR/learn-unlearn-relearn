const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.send("<h1>In Generic Middlware that handles / requests.</h1>");

  /////// Serving HTML file :

  // res.sendFile("/NodeJS_CompleteGuide/ExpressJS/views/shop.html");
  //Error: ENOENT: no such file or directory,

  // res.sendFile("./views/shop.html");
  //TypeError: path must be absolute or specify root to res.sendFile

  // Always use path module as a good practice.
  // adapts to changes and does not fail on different operating systems.

  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));

  // __dirname holds path of current file, hence we use ../ to go up in directory and then into 'views' folder.

  res.sendFile(path.join(rootDir, "../", "views", "shop.html"));
});

module.exports = router;
