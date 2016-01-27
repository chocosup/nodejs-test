function createAdder (baseNumber) {
	return function (numberToAdd) {
		return numberToAdd + baseNumber;
	};
}

console.log(createAdder(100)(2));