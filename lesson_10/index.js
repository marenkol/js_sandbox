
let ratesData = {};

const getData = () => {
	return fetch('https://api.exchangeratesapi.io/latest')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch( error => console.log(error) );
}

console.log(ratesData);

const selectFrom = document.querySelector('#from');
const selectTo = document.querySelector('#to');
const result = document.querySelector('#result');


const disableValueInToSelect = event => {
	let options = selectTo.querySelectorAll('option');
	let disabledOption = selectTo.querySelector('option[value='+event.target.value+']');

	options.forEach( element => {
		element.removeAttribute('disabled');
	} )

	disabledOption.setAttribute('disabled', 'disabled');
}
selectFrom.addEventListener( 'change', disableValueInToSelect);



