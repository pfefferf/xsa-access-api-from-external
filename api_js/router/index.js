/*eslint-env node, es6 */
/*eslint no-unused-vars: 0*/
"use strict";

module.exports = (app, server) => {
	app.use("/api/testEndpoint", require("./routes/testEndpoint")());
};