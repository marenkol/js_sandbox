/*Part 2: */

function print(size){
	let string = '';
	// let spaces = 0;

	string = string + '\n';
	for ( let i = 0; i < size;  i++){
		for ( let spaces = 0 ; spaces <= i ; spaces++){
			string = string + ' ';
		}

		string = string + '*';
		for ( let j = i; j < size-1; j++){
			string = string + '  ';
		}

		string = string + '*\n';
	}

	return string;
}




/* Part 3 */
function calculate() {
	let result = {
		history: [],
		formula: '',
		args: {}
	}

	let y = 0;
	let formulaSelected = prompt('Choose some formula. 1 - y = kx + b,  2 - y = x^2, exit', 1);

	if ( formulaSelected == 1 ){
		let k = prompt("k = ", 1);
		let x = prompt("x = ", 1);
		let b = prompt("b = ", 1);

		y = Number(k) * Number(x) + Number(b);
		result.history.push(k, x, b);
		console.log(result.history);
		result.formula = 'y = kx + b';
		result.args.k = k;
		result.args.x = x;
		result.args.b = b;
	} else if ( formulaSelected == 2){
		let x = prompt("x = ", 1);

		y = Number(x) * Number(x);
		result.formula = 'y = x^2';
		result.history.push(x);
		result.args = {};
		result.args[x] = x
	} else {
		calculate()
	}


	return result;
}
