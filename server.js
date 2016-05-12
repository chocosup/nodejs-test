var express = require('express');

var app = express();

var PORT = process.env.PORT || 8000;

app.get('/', function (req, res) {
	res.send('API root.');
});

app.get('/test', function (req, res) {
	res.send('testing.');
});

app.listen(PORT, function () {
	console.log('app listening on port ' + PORT + '.');
});