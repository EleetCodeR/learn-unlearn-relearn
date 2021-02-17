const http = require("http");
const url = require("url");
const fs = require("fs");

/////// -- Top level code executed only once.
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
///////

///// -- callback is invoked everytime a request is received..
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is PRODUCT");
  } else if (pathName === "/api") {
    // fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
    //   // console.log(__dirname);
    //   const productData = JSON.parse(data);
    //   //console.log(productData);
    //   res.writeHead(200, { "content-type": "application/json" });
    //   res.end(data);
    // });

    // instead of reading file for every request, read once at start and just send response on request..
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world", // Can be used to send some metadata about response.
    });
    res.end("<h1>Page not found!</h1>");
  }
});

//// start listening on a port..
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
