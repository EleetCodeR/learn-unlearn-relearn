const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter a Message</title><head>");
    // a submit type button in html-form will by default make a new request (POST), we can customize and define action (URL) to redirect to a path.
    // also any input is sent as KV pair with provided name as key.
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  // process.exit(); // quits the process (hard exit - stops listening on port.)

  if (url === "/message" && method === "/POST") {
    //// Get the raw-data from request body,
    const body = [];

    // 'on' method allows us to listen to some events.
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    }); // 'data' event is fired whenever a new chunk of data is ready to be read.

    return req.on("end", () => {
      // now here, we can work with all the raw-data chunks collected.
      // since we know for sure, the raw-data is actually 'text' and not file, we convert it to string,

      const parsedBody = Buffer.concat(body).toString();
      //concat -> concats all the buffers in the list.

      const message = parsedBody.split("=")[1];

      //// Save the input message in a file.
      // fs.writeFileSync("message.txt", message);
      fs.writeFile("message.txt", message, (err) => {
        //// redirect to / URL.
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    }); // 'end' is fired when parsing incoming request is completed.
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Demo Page</title><head>");
  res.write("<body><h1>Node.js Server :  Hello!!</h1></body>");
  res.write("</html>");
  res.end();
};

// module.exports = requestHandler; // register the function into exports.

// module.exports.handler = requestHandler;
// module.exports.someText = "Some text.";

/////// in short

// exports.handler = requestHandler;
// exports.someText = "Some text.";

// to export multiple things into an object--
module.exports = {
  handler: requestHandler,
  someText: "Some text.",
};
