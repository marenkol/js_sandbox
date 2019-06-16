/* Task 1 */
const section = document.querySelector('.task-1');

function waitForScroll() {
	return new Promise( (resolve, reject) => {
		window.addEventListener('scroll', resolve);
	});
}

function drawOnScroll() {
	const colors = ['#D46A6A', '#407F7F', '#55AA55', '#4C2D73', '#71266E', '#393D91', '#FFFB22'];
	let randColorIndex = Math.floor(Math.random() * colors.length);
	section.style.backgroundColor = colors[randColorIndex];
}

function waitForAnswer() {
	return new Promise( (resolve, reject) => {
		let checkSymbol = event => {
			if ( event.keyCode == 89 ) {
				// console.log('resolved');
				return resolve;
			}
			if ( event.keyCode == 78 ) {
				// console.log('rejected');
				return reject;
			}
			alert('Please, press Y ar N key');
		}
		window.addEventListener( 'keydown', checkSymbol);
	});
}

function setText(text){
	if ( !section.querySelector('h2') ) {
		const newBlock = document.createElement('h2');
		newBlock.innerHTML = text;
		section.appendChild(newBlock);
	} else {
		const block = section.querySelector('h2')
		block.innerHTML = text;
	}
}

waitForScroll()
	.then(drawOnScroll);

setText("Вы сделали домашнее задание? Y / N");

waitForAnswer()
	.then(setText('Так держать!'))
	.catch(setText('Нужно подтянуть('));









//========================================

// function makeImages (...images) {
// 	for (let i = 0; i < images.length; i +=1) {
// 		const div = document.createElement('div')
// 		const img = document.createElement('img')

// 		document.body.append(div);
// 		div.append(img);

// 		div.style.display = 'inline-block'
// 		div.style.margin = `4px`
// 		div.style.width = `${30}%`
// 		img.style.width = `${100}%`
// 		img.style.height = 'auto'

// 		img.src = images[i];
// 	}
// }
// // makeImages('./space-1.jpg', './space-2.jpg', './space-3.jpg');



// /* Task 2 */

// class FormBuilder {
// 	constructor (){
// 		this.form = document.createElement('form');
// 	}

// 	appendTo (target){
// 		const formWrap = document.createElement(target);
// 		document.body.append(formWrap);
// 		formWrap.append(this.form);
// 	}

// 	addInput (name){
// 		const formInput = document.createElement('input');
// 		formInput.type = 'text';
// 		formInput.name = name;
// 		this.form.append(formInput);
// 	}

// 	addCheckbox (name){
// 		const formCheckbox = document.createElement('input');
// 		formCheckbox.type = 'checkbox';
// 		formCheckbox.name = name;
// 		this.form.append(formCheckbox);
// 	}

// 	addButton (name) {
// 		const formButton = document.createElement('button');
// 		formButton.type = 'submit';
// 		formButton.innerHTML = name;
// 		this.form.append(formButton);
// 	}

// 	destroy (){
// 		console.log( this.form.parentElement );
// 		this.form.parentElement.removeChild(this.form);
// 		console.log( this.form.parentElement );
// 	}
// }
// // const myAwesomeForm = new FormBuilder();



// /* Task 3 */
// function initBall () {
// 	const circle = document.createElement('div');
// 	document.body.append(circle);

// 	let docHeight = document.documentElement.clientHeight  - 35;
// 	let docWidth = document.documentElement.clientWidth - 35;

// 	const ballPosition = (event) => {
// 		circle.style.top = `${Math.floor(Math.random() * docHeight)}px`;
// 		circle.style.left = `${Math.floor(Math.random() * docWidth)}px`;
// 		console.log(event);
// 		event.stopPropagation();
// 	};

// 	circle.style.position = 'absolute';
// 	circle.style.zIndex = '10';
// 	circle.style.backgroundColor = 'lightseagreen';
// 	circle.style.width = '35px';
// 	circle.style.height = '35px';
// 	circle.style.borderRadius = '50%';
// 	circle.style.cursor = 'pointer';
// 	circle.style.transition = '.3s';
// 	circle.style.top = `${Math.floor(Math.random() * docHeight)}px`;
// 	circle.style.left = `${Math.floor(Math.random() * docWidth)}px`;

// 	circle.addEventListener('click', ballPosition);

// 	const removeBall = () => {
// 		circle.removeEventListener('click', ballPosition);
// 		console.log('window is ckicked');
// 		window.removeEventListener('click', removeBall);
// 		document.body.removeChild(circle);
// 	}
// 	window.addEventListener('click', removeBall);
// }
