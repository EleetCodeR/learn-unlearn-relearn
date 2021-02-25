const http = require("http");
const url = require("url");
const fs = require("fs");

////////////////////// SERVER //////////////////////

/// -- Top level code (executed only once.)
/// Read data only once for better performance.

const replaceTemplate = (template, product) => {
  // let output = template.replace("{%PRODUCTNAME}", product.productName);

  /// REPLACE WILL ONLY REPLACE FIRST OCCRUNCE , HENCE USE REGEX FOR DEFINING PLACEHOLDERS INSTEAD,
  /// WRAP IN GLOBAL FALG.(to replace all occrunces)

  let output = template.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");

  return output;
};

/////////// HTML-templates
const templateOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const templateCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const templateProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
///////////

/// --> callback func. of server is invoked everytime a request is received..
/// hence we avoid any blocking-code or heavy data-reads inside it.

const server = http.createServer((req, res) => {
  const pathName = req.url;
  // Overview page
  if (pathName === "/" || pathName === "/overview") {
    //res.end("This is OVERVIEW");
    res.writeHead(200, { "content-type": "text/html" });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(templateCard, el))
      .join("");

    const output = templateOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml);

    res.end(output);
  } // Product page
  else if (pathName === "/product") {
    res.end("This is PRODUCT");
  } // API
  else if (pathName === "/api") {
    /* 
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      // console.log(__dirname);
      const productData = JSON.parse(data);
      //console.log(productData);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(data);
    });
    */
    // instead of reading file for every request, read once at start and just send response on request..
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else {
    // NOT-FOUND
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
