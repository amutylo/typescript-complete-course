// Exercise 1 - How was your TypeScript Class?
class Car {
	name: String;
	acceleration: number;

	constructor(name: string) {
		this.name = name;
		this.acceleration = 0;
	}

	honk() {
		console.log('Toooooooooot!');
	}

	accelerate(speed: number) {
		this.acceleration = this.acceleration + speed;
	}
}

var car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class Base {
	width: number = 0;
	length: number = 0;
}

var base = new Base();

class Rectangle extends Base {
	calcSize() {
		return this.width * this.length;
	}
}

var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
	private _firstName: string = '';
	enumerable: boolean = true;
	configurable: boolean = true;

	get firstName() {
		return this._firstName;
	}
	set firstName(value: string) {
		if (value.length > 3) {
			this._firstName = value;
		} else {
			this._firstName = '';
		}
	}
}

let person = new Person();

console.log(person.firstName);
person.firstName = 'Ma';
console.log(person.firstName);
person.firstName = 'Maximilian';
console.log(person.firstName);
