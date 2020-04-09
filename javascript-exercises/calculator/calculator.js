function add(a, b) {
	return a+b;
}

function subtract(a,b) {
	return a-b;
}

function sum(inputs) {
	return inputs.reduce((total, amount) => total + amount, 0);
}

function multiply(inputs) {
	return inputs.reduce((total, amount) => total * amount, 1);
}

function power(a,b) {
	return a ** b;
}

function factorial(n) {
	if (n <= 1){
		return 1;
	} else {
		return n * factorial(n-1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
