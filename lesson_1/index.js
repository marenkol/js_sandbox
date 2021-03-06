// Task 1
function makeGreetings ( age ) {
	let ageWord = 'год'

	if ( age % 10 >= 2 && age % 10 < 5 ) {
		ageWord = 'года'
	}

	if ( ( age % 10 >= 5 && age % 10 < 10 ) || ( age > 10 && age <= 19 ) || age % 10 == 0 ) {
		ageWord = 'лет'
	}

	return 'Мой возраст ' + age + ' ' + ageWord
}



// Task 2
function splitArray ( arr, num ) {
	let subArray = []

	if (Array.isArray(arr) || num < 0 || num){
		return subArray
	}

	for ( let i = 0; i < arr.length; i += num ) {
		subArray.push( arr.slice( i, i + num ) )
	}

	return subArray
}



// Task 3
const add = a => b => a + b



// Task 4
function transformData ( arr ) {
	let finalObj = {}

	arr.forEach( element => {
		if ( element.mark > 5 ) {
			let fullName = element.firstName

			if ( element.lastName.length > 0 ) {
				fullName = fullName + ' ' + element.lastName
			}

			// finalObj[element.login] = fullName
			finalObj[element.login] = (element.firstName + ' ' + element.lastName).trim()
		}
	})

	return finalObj
}
