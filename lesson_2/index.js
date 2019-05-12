// Task 1
function removeKeys ( obj, arr ) {

	arr.forEach( ( value ) => {
		if ( obj.hasOwnProperty( value ) ){
			console.log( value )
			delete obj[value]
		}
	})

	return obj
}



// Task 2
function clearNumbers ( arr ) {

	arr.forEach( ( subArray ) => {
		for ( let i = 0; i < subArray.length; ){
			if ( typeof subArray[i] != "number" ){
				subArray.splice( i, 1 )
				continue
			}
			i++
		}
	})

	return arr
}


// Task 3
function reverse () {

	let resultArray = []

	for ( let i = 0; i < arguments.length; i++ ) {
		if ( typeof arguments[i] === 'string'){
			resultArray.push( arguments[i].split('').reverse('').join('') )
		}
	}

	return resultArray
}

