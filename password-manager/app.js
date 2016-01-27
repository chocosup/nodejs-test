console.log('starting password manager');

var crypto = require('crypto-js');
var storage = require('node-persist');
var argv = require('yargs')
	.command('add', 'Adds an account', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Account name',
				type: 'string'
			},
			username: {
				demand: true,
				alias: 'u',
				description: 'Username for the account',
				type: 'string'
			},
			password: {
				demand: true,
				alias: 'p',
				description: 'Account password',
				type: 'string'
			},
			master: {
				demand: true,
				alias: 'm',
				description: 'Master password',
				type: 'string'
			}
		}).help('help');
	})
	.command('get', 'Prints an account', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Account name',
				type: 'string'
			},
			master: {
				demand: true,
				alias: 'm',
				description: 'Master password',
				type: 'string'
			}
		}).help('help');
	})
	.command('rm', 'Removes an account', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Account name',
				type: 'string'
			},
			master: {
				demand: true,
				alias: 'm',
				description: 'Master password',
				type: 'string'
			}
		}).help('help');
	})
	.command('ls', 'Lists all accounts', function (yargs) {
		yargs.options({
			master: {
				demand: true,
				alias: 'm',
				description: 'Master password',
				type: 'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;

storage.initSync();


function authenticate(masterPw) {
	return (crypto.SHA512(masterPw).toString() === storage.getItemSync('master password'));
};

function loadAccounts (masterPw) {
	var encAccounts = storage.getItemSync('accounts');
	if (typeof encAccounts === 'undefined') {
		return [];
	} else {
		return JSON.parse(crypto.AES.decrypt(encAccounts, masterPw).toString(crypto.enc.Utf8));
	};
};

function saveAccounts (accounts, masterPw) {
	var stringedAccounts = JSON.stringify(accounts);
	var encAccounts = crypto.AES.encrypt(stringedAccounts, masterPw).toString();
	storage.setItemSync('accounts', encAccounts);
};


function createAccount (account, masterPw) {
	accounts.push(account);
};

function getAccount (accountName, masterPw) {
	var match;
	for (var i = 0; i < accounts.length; i++) {
		if (accounts[i].name === accountName) match = accounts[i];
	};
	return match;
};

function removeAccount (accountName, masterPw) {
	for (var i = 0; i < accounts.length; i++) {
		if (accounts[i].name === accountName) {
			accounts.splice(i,1);
			i--;
		};
	};
};



if (authenticate(argv.master)) {
	accounts = loadAccounts(argv.master);

	if (argv._[0] === 'add') {
		createAccount({
			name: argv.name,
			username: argv.username,
			password: argv.password
		}, argv.master);
	};
	
	if (argv._[0] === 'get') console.log(getAccount(argv.name), argv.master);
	
	if (argv._[0] === 'rm') removeAccount(argv.name, argv.master);
	
	if (argv._[0] === 'ls') accounts.forEach(function (toPrint) { console.log(toPrint) });

	saveAccounts(accounts, argv.master);
} else {
	console.log('Error: Wrong master password. Aborting.');
};