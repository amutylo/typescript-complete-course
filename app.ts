let hobbies = ['cooking', 'swimming'];
// console.log(typeof hobbies);

// type aliases

type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex: Complex = {
	data: [10, 12, 14],
	output: function(all: boolean): number[] {
		return this.data;
	},
};

console.log(complex.output(true));
