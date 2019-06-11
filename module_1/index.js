// Task 2
const wrap = document.querySelector('#task-2');
const button = document.createElement('button');
// let wordsArray = ['орел','и', ' решка'];
// let resultString = '';
let searchString = '';
let seachIndexes = [];

function getSearchString(){
	let inputs = wrap.getElementsByTagName('input');

	for (let i = 0; i < inputs.length; i += 1) {
		let input = inputs[i];
		if(input.value > 0){
			seachIndexes.push(parseInt(input.value));
		}
	}

	// console.log(seachIndexes);
}

function strangeSearch(arr){

	arr.forEach( element => {
		const word = document.createElement('span');
		const input = document.createElement('input');

		word.innerHTML = element;
		input.classList.add('form-control');
		input.setAttribute('value', '0');
		input.setAttribute('type', 'number');

		wrap.append(word);
		wrap.append(input);

		searchString += `${word.innerText}+`;
	});

	button.setAttribute('id', 'go');
	button.innerHTML = "Search";
	button.classList.add('btn');
	button.classList.add('btn-primary');
	button.classList.add('mt-2');
	wrap.append(button);
}


const searchClick = () => {
	// getSearchString();

	// for (let j = 0; j < seachIndexes.length; j += 1){
	// 	resultString += `${searchString[seachIndexes[j]]}+`;
	// }
	console.log(searchString);
	window.location.href = `https://www.youtube.com/results?search_query=${searchString}`;
};
button.addEventListener('click', searchClick);




// Task 4

import imgSrc from './cat-icon-15.png';
const image = document.createElement('img');

const catMove = (event) => {
	image.style.top = `${event.y-35}px`;
	image.style.left = `${event.x-25}px`;
}

function stickyСat(){
	image.setAttribute('src', imgSrc);
	image.style.position = 'absolute';
	image.style.width = '25px';
	image.style.height = '25px';

	document.body.append(image);

	window.addEventListener('mousemove', catMove );
}

function unstickTheСat(){
	window.removeEventListener('mousemove', catMove);
	document.body.removeChild(image);
}

window.strangeSearch = strangeSearch;
window.stickyСat = stickyСat;
window.unstickTheСat = unstickTheСat;


