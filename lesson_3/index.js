// Task 1
class Human {
	constructor ( obj ){
		this.name = obj.name
		this.age = obj.age
	}

	sayHello() {
		console.log('Hello, my name is ' +  this.name +', I am ' + this.age +' years old')
	}
}

const me = new Human({ name: 'Ivan', age: 20 })


class AlevelStudent extends Human {
	constructor (obj) {
		super(obj.name, obj.age)

		this.marks = obj.marks
	}

	averageMark () {
		let sum = 0;

		this.marks.forEach( (value) => {
			sum += value
		});

		return sum / this.marks.length
	}
}

const lili = new AlevelStudent({ name: 'Ivan', age: 20, marks: [5, 3, 5, 1, 4] });



// Task 2
class Calculator {
	constructor (){
		this.result = 0
		this.num = 0
	}

	reset () {
		this.result = 0
		return this
	}

	add (num) {
		this.result += num
		return this
	}

	sub (num) {
		this.result -= num
		return this
	}

	mul (num) {
		this.result *= num
		return this
	}

	div (num) {
		this.result /= num
		return this
	}

	pow (num) {
		this.result = Math.pow(this.result, num)
		return this
	}

	sqrt () {
		this.result = Math.sqrt(this.result)
		return this
	}

	getResult () {
		return this.result
	}
}
