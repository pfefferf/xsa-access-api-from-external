/*eslint-env node, es6 */
/*eslint no-unused-vars: 0*/
"use strict";

module.exports = (app, server) => {
	app.use("/testEndpoint", require("./routes/testEndpoint")());
};