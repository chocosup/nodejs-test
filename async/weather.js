var request = require('request');


module.exports = function (coordinates) {
	if (typeof coordinates === 'string') {
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + coordinates + '&units=metric&APPID=04df9ea1586c30f326ba13d55a8a0c5d';
		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				console.log('Une erreur s\'est produite.');
			} else {
				console.log('Il fait ' + body.main.temp + ' degrés à ' + coordinates + '.');
			};
		});
	} else {
		var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coordinates.lat + '&lon=' + coordinates.lon + '&units=metric&APPID=04df9ea1586c30f326ba13d55a8a0c5d';
		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				console.log('Une erreur s\'est produite.');
			} else {
				console.log('Il fait ' + body.main.temp + ' degrés là où vous êtes.');
				// console.log(url);
				// console.log(body);
			};
		});
	};
};