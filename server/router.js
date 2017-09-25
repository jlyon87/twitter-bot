const express = require("express");
const path = require("path");
const router = express.Router();

router.use(function timeLog(req, res, next) {
	console.log("req originalUrl: ", req.originalUrl);
	console.log("Time: ", Date.now());
	next();
});

router.get("/assets/css/master.css", function(req, res) {
	res.sendFile(path.join(__dirname, "../app", "assets", "css", "master.css"));
});

router.get("/assets/js/index.js", function(req, res) {
	res.sendFile(path.join(__dirname, "../app", "assets", "js", "index.js"));
});

router.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../app", "index.html"));
});

router.get("/favicon5.ico", function(req, res) {
	res.sendFile(path.join(__dirname, "../app", "assets", "images", "favicon5.ico"));
});

router.get("/*", function(req, res) {
	console.log("Route Error request: ", req.originalUrl);
	res.sendFile(path.join(__dirname, "../app", "index.html"));
});

module.exports = router;
