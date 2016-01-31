// function doWorkPromise (data) {
// 	return new Promise(function (resolve, reject) {
// 		resolve('everything went ok');
// 		reject('accident');
// 	});
// };

// doWorkPromise('some data').then(function (data) {
// 	console.log(data);
// }, function (error) {
// 	console.log(error);
// });

// var request = require('request');

// function getWeather (coordinates) {
// 	return new Promise(function (resolve, rejectsss) {
// 		if (typeof coordinates === 'string') {
// 			var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + coordinates + '&units=metric&APPID=04df9ea1586c30f326ba13d55a8a0c5d';
// 			console.log(url);
// 			request({
// 				url: url,
// 				json: true
// 			}, function (error, response, body) {
// 				if (error) {
// 					rejectsss('Une erreur s\'est produite.');
// 				} else {
// 					if (body.cod === 200) {
// 						resolve('Il fait ' + body.main.temp + ' degrés à ' + coordinates + '.');
// 					} else {
// 						rejectsss(body.message);
// 					};
// 				};
// 			});
// 		} else {
// 			console.log('No location provided: getting your current location\'s weather.');
// 			var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coordinates.lat + '&lon=' + coordinates.lon + '&units=metric&APPID=04df9ea1586c30f326ba13d55a8a0c5d';
// 			request({
// 				url: url,
// 				json: true
// 			}, function (error, response, body) {
// 				if (error) {
// 					rejectsss('Une erreur s\'est produite.');
// 				} else {
// 					resolve('Il fait ' + body.main.temp + ' degrés là où vous êtes.');
// 					// console.log(url);
// 					// console.log(body);
// 				};
// 			});
// 		};
// 		rejectsss('toto');
// 	});
// };

// var prom = getWeather('dsdhgfsjjdrytrdtfg');

// prom.then(function (weather) {
// 	console.log(weather);
// }, function (error) {
// 	console.log('ERROR !');
// 	console.log(error);
// });

var Test = function (callbackPromise) {
	this.argument = undefined;
	this.ending = undefined;
	var parent = this;

	this.resolve = function (message) {
		parent.ending = 'resolve';
		parent.argument = message;
	};
	this.reject = function (message) {
		parent.ending = 'reject';
		parent.argument = message;
	};
	callbackPromise(this.resolve, this.reject);
	this.then = function (callbackResolve, callbackReject) {
		if (this.ending === 'resolve') {
			callbackResolve(this.argument);
		} else if (this.ending === 'reject') {
			callbackReject(this.argument);
		} else {
			console.log('Unable to determine if resolved or rejected.')
		};
	};
};

var test = new Test(function (resolve, reject) {
	console.log('Starting constructor callback function.');
	if (0) {
		resolve('Function ended successfully.');
	} else {
		reject('A problem occurred.');
	};
});


// test.resolve('done.');
// console.log(test);

test.then(function (arg) { console.log(arg) }, function (arg) { console.log('ERROR: ' + arg)});