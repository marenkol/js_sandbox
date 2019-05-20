/* Task 1 */

function makeImages (...images) {

	for (let i = 0; i < images.length; i +=1) {
		const div = document.createElement('div')
		const img = document.createElement('img')

		document.body.append(div);
		div.append(img);

		div.style.display = 'inline-block'
		div.style.margin = `4px`
		div.style.width = `${30}%`
		img.style.width = `${100}%`
		img.style.height = 'auto'

		img.src = images[i];
	}

}
// makeImages('./space-1.jpg', './space-2.jpg', './space-3.jpg');



/* Task 2 */

class FormBuilder {
	constructor (){
		this.form = document.createElement('form');
	}

	appendTo (target){
		const formWrap = document.createElement(target);
		document.body.append(formWrap);
		formWrap.append(this.form);
	}

	addInput (name){
		const formInput = document.createElement('input');
		formInput.type = 'text';
		formInput.name = name;
		this.form.append(formInput);
	}

	addCheckbox (name){
		const formCheckbox = document.createElement('input');
		formCheckbox.type = 'checkbox';
		formCheckbox.name = name;
		this.form.append(formCheckbox);
	}

	addButton (name) {
		const formButton = document.createElement('button');
		formButton.type = 'submit';
		formButton.innerHTML = name;
		this.form.append(formButton);
	}

	destroy (){
		console.log( this.form.parentElement );
		this.form.parentElement.removeChild(this.form);
		console.log( this.form.parentElement );
	}
}
// const myAwesomeForm = new FormBuilder();



/* Task 3 */
function initBall () {
	const circle = document.createElement('div');
	document.body.append(circle);

	circle.style.position = 'absolute';
	circle.style.zIndex = '10';
	circle.style.backgroundColor = 'lightseagreen';
	circle.style.width = '35px';
	circle.style.height = '35px';
	circle.style.borderRadius = '50%';
	circle.style.cursor = 'pointer';
	circle.style.transition = '.3s';

	let docHeight = document.documentElement.clientHeight;
	let docWidth = document.documentElement.clientWidth;

	circle.addEventListener('click', () => {
		circle.style.top = `${Math.floor(Math.random() * docHeight) - 35}px`;
		circle.style.left = `${Math.floor(Math.random() * docWidth) - 35}px`;
	} )
}
