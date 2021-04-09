const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// set can be used to set a variable globally. (generally configuration settings)
// certain keywords however are reserved and can change behavior of the express server. (eg."view engine")
app.set("view engine", "pug");
//since pug is express conforming, it auto-registers.
//here we are setting a templating engine.

app.set("views", "../views");
// declares where to find templates.

const rootDir = require("../util/path");

const adminData = require("./admin");
const shopRoutes = require("./shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/admin", adminData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(3000);
