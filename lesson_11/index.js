
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
	getIpData('https://api.2ip.ua/geo.json?ip='),
	getIpData('http://api.sypexgeo.net/'),
]).then ( IP => {
	return fetch(`https://api.jsonbin.io/g/${IP}`, {
				method: 'GET'
			})
			.then( response => response.json())
			.then( obj => {
				resultBox.innerHTML += `City: ${obj.data.city}, Country: ${obj.data.country}`;
			} )
} )


