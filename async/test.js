// function doWork (input) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			console.log('Done!' + input);
// 			resolve(input);
// 		}, 1000);
// 	});
// };

// doWork('first').then(function (msg) {
// 	// console.log('second');
// 	doWork('second');
// 	return 1;
// }).then(function (msg) {
// 	// console.log(msg);
// });


function getLocation (works) {
	return new Promise(function (resolve, reject) {
		if (works) {
			resolve('Paris');
		} else {
			reject({
				nb: 1,
				msg: 'tested error.'
			});
		};
	});
};

function getWeather (location) {
	console.log('yo');
	return new Promise(function (resolve, reject) {
		resolve('It\'s 18 in ' + location + '.');
	});
};

var a = getLocation(true)
.then(function (location) {
	return getWeather(location);
}, function (error) {
	console.log('Error ' + error.nb + ': ' + error.msg);
})
// .then(function (text) {
// 	console.log(text);
// });

console.log(a);


// var Test = function () {
// 	this.one = 1;
// 	this.two = function () {
// 		this.one = 2;
// 		return 1;
// 	};
// }

// var a = new Test();
// var b = a.two();

// console.log(a);
// console.log(b);