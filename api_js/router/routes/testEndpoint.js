/*eslint no-shadow: 0*/
"use strict";

module.exports = function() {
	var app = require("express").Router();
	
	app.get('/', function(req, res) {
		res.json({
			success: true	
		});
	});

	return app;
};
