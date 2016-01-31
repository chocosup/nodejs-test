var express = require('express');
var app = express();

var port = 8080;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' at ' + new Date().toString());
		next();
	}
};

app.use(middleware.logger);


 // app.get('/', function (req, res) {
 // 	res.send('Hello express!');
 // });

app.get('/about', middleware.requireAuthentication, function (req, res) {
 	res.send('About us');
 });

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
	console.log('Express server started on port ' + port + '.');
});