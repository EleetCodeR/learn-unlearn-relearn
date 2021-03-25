const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./admin");
const shopRoutes = require("./shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
// the requests will automatically be funneled via routes defined in above router.
// the order or routes matters here as well.
app.use(shopRoutes);

app.listen(3000);
