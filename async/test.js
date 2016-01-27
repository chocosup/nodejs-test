var request = require('request');
var weather = require('./weather.js');
var argv = require('yargs')
	.command('loc', 'Specify location', function (yargs) {
		yargs.options({city: {
			demand: true,
			alias:'c',
			description: 'City name',
			type: 'string'
		}}).help('help');
	})
	.help('help')
	.argv;

if (argv._[0] === "loc") {
	weather(argv.city);
} else {

	var coord = require('./location.js');
	
	coord(function (thing) {
		weather(thing);
	});
};