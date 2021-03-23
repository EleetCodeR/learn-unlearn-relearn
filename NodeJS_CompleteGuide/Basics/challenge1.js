const http = require("http");

const reqHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  // Route-1
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Challenge-1</title></head>");
    res.write(
      "<body><h1>Welcome!!</h1><h3>You are on URL: <h2>/.</h2></h3><form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Create user</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  // Route-2
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Challenge-1</title></head>");
    res.write(
      "<body><h1>Welcome!!</h1><h3>You are on URL: <h2>/users.</h2></h3><ul><li>Cypher</li><li>Brimstone</li><li>Omen</li><li>Reyna</li><li>Sage</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }

  // Route-3
  if (url === "/create-user") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];

      console.log("Username : " + username);

      res.statusCode = 302;
      res.setHeader("Location", "/users");
      return res.end();
    });
  }

  // Default Route
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Challenge-1</title><head>");
  res.write("<body><h1>Welcome Page</h1></body>");
  res.write("</html>");
  res.end();
};

const server = http.createServer(reqHandler);

server.listen(3000);
