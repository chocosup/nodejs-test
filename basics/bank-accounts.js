var accounts = [];

function createAccount(account) {
	accounts.push(account);
	return account;
};

function getAccount(username) {
	var match;
	for (i = 0; i < accounts.length; i++) {
		if (accounts[i].username === username) match = accounts[i];
	};
	return match;
};


function deposit (account, amount) {
	if (typeof amount === 'number')	{
		account.money += amount;
	} else {
		console.log('Error: the amount to deposit must be a number.');
	};
};

function withdraw (account, amount) {
	if (typeof amount === 'number')	{
		account.money += amount;
	} else {
		console.log('Error: the amount to withrax must be a number.');
	};
};

function getBalance (account) {
	return account.money;
};

function createBalanceGetter (account) {
	return function () {
		return account.money;
	}
};

createAccount({
	money: 0,
	username: 'Ambroise'
});

createAccount({
	money: 100,
	username: 'Marion'
});

deposit(getAccount('Marion'), 1000000);

console.log(createBalanceGetter(getAccount('Marion'))());