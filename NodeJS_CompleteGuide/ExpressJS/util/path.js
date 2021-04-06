const path = require("path");

module.exports = path.dirname(process.mainModule.filename);

// using 'process' glob.var find the main-file name.
// then from the main file name, we get its directory name.
