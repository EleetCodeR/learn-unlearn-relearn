const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const path = require("path");

const rootDir = require("../util/path");

const adminRoutes = require("./admin");
const shopRoutes = require("./shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "..", "public")));
// this add a built-in express middleware that is used to serve-files statically (css, js , images etc.)
// any request from the application will be forwared to this path.
// we can register muliple folders like this for static content
// the request will funnel through all the middlewares, untill first hit.
// as a convention we name such folder as public.

app.use("/admin", adminRoutes);
// only the paths beginning with '/admin' segment will go into this middleware and further checking will continue inside the route-file.

app.use(shopRoutes);

// the requests will automatically be funneled via routes defined in above routers.
// the order or routes matters here as well.

//handling-undefined paths
app.use((req, res, next) => {
  //res.status(404).send("<h1>Page Not Found!</h1>");
  res.sendFile(path.join(rootDir, "..", "views", "404.html"));
});

app.listen(3000);
