/*eslint no-console: 0*/
"use strict";

var http = require("http");
var port = process.env.PORT || 3000;

// create express app
var app = require("express")();

// add security handling via passport
var passport = require("passport");
var xssec = require("@sap/xssec"); 
var xsenv = require("@sap/xsenv");
passport.use("JWT", new xssec.JWTStrategy(xsenv.getServices({
	uaa: {
		tag: "xsuaa"
	}
})));
app.use(passport.initialize());
app.use(passport.authenticate("JWT", {
	session: false
}));

// create server
var server = http.createServer();

// setup routes of express app
require("./router")(app, server);

// start server
server.on("request", app);
server.listen(port, function() {
	console.info("HTTP Server listening at: " + port);
});