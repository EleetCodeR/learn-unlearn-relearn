const http = require("http"); // importing global module.
// path should start with / or ./ (relative) for user-defimed files.
const routes = require("./routes");

console.log(routes.someText);
// server executes callback for every request received.
// const server = http.createServer((req, res) => {});
const server = http.createServer(routes.handler);

server.listen(3000); // starts a process that keeps on listening for requests on the mentioned port.
