// Exercise 1 use arrow function
var double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2 provide default values for the function
var greet = (name: string = 'Jane') => {
	if (name === undefined) {
		name = 'Max';
	}
	console.log('Hello, ' + name);
};
greet();
greet('Anna');

// Exercise 3 make a shorter way to get value
var numbers = [-3, 33, 38, 5];
console.log('Minimum value is: ', Math.min(...numbers));

// Exercise 4 same as exec. 3
var newArray = [55, 20];
newArray.push(...numbers);
console.log('new array is: ', newArray);

// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var [result1, result2, result3] = testResults;

console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
var scientist = { firstName: 'Will', experience: 12 };
var { firstName, experience } = scientist;
console.log(firstName, experience);
