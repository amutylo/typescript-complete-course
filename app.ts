class Person {
	name: string;
	private type: string;
	protected age: number = 27;

	constructor(name: string, public username: string) {
		this.name = name;
	}

	printAge() {
		console.log('Age: ', this.age);
	}

	setType(type: string) {
		this.type = type;
		console.log('Type: ', this.type);
	}

	getType() {
		return this.type;
	}

	getAge() {
		return this.age;
	}
}

const person = new Person('Andrii', 'andr');
person.setType('my type');
console.log(person.name, person.username, person.getAge(), person.getType());
console.log(person);
