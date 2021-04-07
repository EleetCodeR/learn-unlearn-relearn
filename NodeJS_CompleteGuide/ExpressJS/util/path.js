const path = require("path");

// module.exports = path.dirname(process.mainModule.filename);
module.exports = path.dirname(require.main.filename);

// using 'require' glob.var find the main-file name.
// then from the main file name, we get its directory name.
