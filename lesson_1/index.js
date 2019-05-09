function makeGreetings ( age ) {
	let ageWord = 'год';

	if ( age % 10 >= 2 && age % 10 < 5 ){
		ageWord = 'года'
	}

	if ( ( age % 10 >= 5 && age % 10 < 10 ) || ( age > 10 && age <= 19 ) || age % 10 == 0) {
		ageWord = 'лет'
	}

	return 'Мой возраст ' + age + ' ' + ageWord
}


function splitArray ( arr, num ) {

}
