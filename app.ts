let hobbies = ['cooking', 'swimming'];
// console.log(typeof hobbies);

// type aliases

type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex: Complex = {
	data: [10, 12, 14],
	output: function(all: boolean): number[] {
		if (all) {
			return this.data;
		} else {
			return [];
		}
	},
};

console.log(complex.output(true));
