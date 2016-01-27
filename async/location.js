var request = require('request');


module.exports = function (callback) {
	request('http://ipinfo.io', function (error, response, body) {
		var coords = JSON.parse(body).loc.split(',');
		var coordinates = {
			lat: coords[0],
			lon: coords[1]
		};
		callback(coordinates);
	});
};