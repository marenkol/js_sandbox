// Task 1
function makeGreetings ( age ) {
	let ageWord = 'год'

	if ( age % 10 >= 2 && age % 10 < 5 ){
		ageWord = 'года'
	}

	if ( ( age % 10 >= 5 && age % 10 < 10 ) || ( age > 10 && age <= 19 ) || age % 10 == 0) {
		ageWord = 'лет'
	}

	return 'Мой возраст ' + age + ' ' + ageWord
}



// Task 2
function splitArray ( arr, num ) {
	let subArray = []

	for ( let i = 0, j = arr.length; i < j; i += num ) {
	  subArray.push( arr.slice(i, i + num) )
	}

	return subArray
}



// Task 3
function transformData ( arr ) {
	let finalObj = {}

	arr.forEach( element => {
		if ( element.mark > 5 ) {
			let fullName = element.firstName

			if ( element.lastName.length > 0 ){
				fullName = fullName + ' ' + element.lastName
			}

			finalObj[element.login] = fullName
		}
	})

	return finalObj
}

let res = transformData([
 { login: 'johnny778', firstName: 'John', lastName: 'Doe', mark: 10 },
 { login: 'superman', firstName: 'Mark', lastName: 'Coulson', mark: 6 },
 { login: 'alexgerman', firstName: 'Alex', lastName: '', mark: 7 },
])



console.log( res )

