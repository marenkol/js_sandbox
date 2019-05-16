// Task 1
function removeKeys ( obj, arr ) {

	arr.forEach( ( value ) => {
		if ( obj.hasOwnProperty( value ) ){
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


// Task 4
function join () {
	let resultObject = {}

	for ( let i = 0; i < arguments.length; i++ ) {

		if ( typeof arguments[i] === 'object' ) {

			for ( let key in arguments[i] ) {

				// if doesn't exist - create
				if ( !resultObject.hasOwnProperty( key ) ) {
					resultObject[key] = arguments[i][key]
				}
				// if string - add
				else if ( typeof resultObject[key] === 'string' && typeof arguments[i][key] === 'string' ) {
					resultObject[key] += arguments[i][key]
				}
				// if number - add
				else if ( typeof resultObject[key] === 'number' && typeof arguments[i][key] === 'number' ) {
					resultObject[key] += arguments[i][key]
				}
				// if array - push
				else if ( Array.isArray( resultObject[key] ) && Array.isArray( arguments[i][key] ) ) {
					arguments[i][key].forEach( ( item ) => {
						resultObject[key].push( item )
					})
				}
				// if exists - rewrite
				else{
					resultObject[key] = arguments[i][key]
				}

			}

		}

	}

	return resultObject
}
