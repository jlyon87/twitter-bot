var Twitter = require("twitter");
var config = require("./keys.js");

var client = new Twitter({
	consumer_key: config.consumer_key,
	consumer_secret: config.consumer_secret,
	access_token_key: config.access_token_key,
	access_token_secret: config.access_token_secret,
});

// {follow: ["conky5", "mrJus71n"]} // F paid twitter api
var stream = client.stream("statuses/filter", {track: "javascript"});
stream.on("data", function(event) {
	console.log(event && event.text);
});

var handleStream = function(cb) {
	stream.on("data", function(event) {
		//console.log(event && event.text);
		cb(event);
	});
};

stream.on("error", function(error) {
	throw error;
});

var twitterApi = {
	onstream: handleStream,
};
module.exports = twitterApi;
