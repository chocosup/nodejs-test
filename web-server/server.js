var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var middleware = require('./middleware.js');

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