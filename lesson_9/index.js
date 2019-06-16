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
