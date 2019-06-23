
const infoBox = document.querySelector('#info-box');
const resultBox = document.querySelector('#result-box');

function getIpData(url) {
	return fetch(url, {
		method: 'GET'
	})
	.then( response => response.json())
	.then( obj => {
		const IP = obj.ip;
		infoBox.classList.remove('text-danger')
		infoBox.innerHTML = 'Your Data';
		resultBox.innerHTML = `IP: ${obj.ip} <br>`;

		console.log(url);
		return IP;
	})
	.catch( err => {
		infoBox.innerHTML = err;
		infoBox.classList.add('text-danger')
	} )
}


Promise.race([
	getIpData('https://api6.ipify.org/?format=json'),
	getIpData('http://api.sypexgeo.net/'),
	]).then ( IP => {
		return fetch(`https://api.jsonbin.io/g/${IP}`, {
			method: 'GET'
		})
		.then( response => response.json())
		.then( obj => {
			resultBox.innerHTML += `City: ${obj.data.city}, Country: ${obj.data.country}`;
		} )
	})



/* ***************************************************************
Task 2
*************************************************************** */

const todoInput = document.querySelector('#todo-input');
const buttonAdd = document.querySelector('#btn-add');
const listTitle = document.querySelector('#list-title');
const list = document.querySelector('#todo-list');
let inputText = null;
let listNum = 0;
let listArr = [];
const removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>'


const getInputText = event => {
	inputText = event.target.value;
	// console.log(inputText)
}
todoInput.addEventListener('change', getInputText);


const addItem = () => {
	if ( inputText ) {
		listArr.push({
			id: `li-${++listNum}`,
			text: inputText,
			el: 'li',
			class: `list-group-item`,
			innerHTML: `<div class="d-flex justify-content-between"><span>${listNum}. ${inputText}</span><span id="remove-${listNum}" class="remove-icon">${removeSVG}</span></div>`
		});

		list.innerHTML = '';

		listArr.forEach( element  => {
			let newLi = document.createElement(element.el);
			newLi.setAttribute('id', element.id);
			newLi.classList.add(element.class);
			newLi.innerHTML = element.innerHTML

			list.appendChild(newLi);
		})

		if ( listArr.length ){
			listTitle.classList.remove('d-none');
		}

		todoInput.value = '';
		inputText = null;
	}
}
buttonAdd.addEventListener('click', addItem);



