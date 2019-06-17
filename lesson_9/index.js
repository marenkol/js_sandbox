/**************************
	Task 1
**************************/

const section = document.querySelector('.task-1');

function waitForScroll() {
	return new Promise((resolve, reject) => {
		window.addEventListener('scroll', resolve);
	});
}

function drawOnScroll() {
	const colors = ['#D46A6A', '#407F7F', '#55AA55', '#4C2D73', '#71266E', '#393D91', '#FFFB22'];
	let randColorIndex = Math.floor(Math.random() * colors.length);
	section.style.backgroundColor = colors[randColorIndex];
}

waitForScroll()
.then(drawOnScroll);

/**************************
	Task 2
**************************/

function waitForAnswer() {
	return new Promise((resolve, reject) => {
		let checkSymbol = event => {
			if ( event.key == 'y' || event.key == 'Y' ) {
				window.removeEventListener( 'keydown', checkSymbol);
				return resolve();
			}
			if ( event.key == 'n' || event.key == 'N' ) {
				window.removeEventListener( 'keydown', checkSymbol);
				return reject();
			}
			alert('Please, press Y or N key');
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

setText("Вы сделали домашнее задание? Y / N");

waitForAnswer()
.then(() => setText('Так держать!'))
.catch(() => setText('Нужно подтянуть('));



/**************************
	Task 3
**************************/

function  waitForTime(sec) {
	return new Promise ((resolve, reject) => {
		const res = () => {
			console.log('time finished!');
			return resolve();
		}
		setTimeout(res, sec*1000);
	});
}

function waitForClicks(clicksAmount) {
	return new Promise ((resolve, reject) => {
		let clicks = 0;
		const checkClicks = () => {
			clicks += 1;
			console.log(clicks);

			if ( clicksAmount === clicks ) {
				console.log('clicks = amount');
				window.removeEventListener('click', checkClicks);
				return resolve();
			}
		}

		window.addEventListener('click', checkClicks);
	});
}

function clickChallange(clicksAmount, sec) {
	setText(`У вас есть ${sec} секунд, чтобы сделать ${clicksAmount} кликов`);

	function compareTime(time1, time2) {
		if ( time1 <= time2 ){
			setText('Good job, comrade');
		} else {
			setText('100 кликов вне очереди.');
		}
	}

	let timeIsOver = 0;
	let clicksDoneTime = 0;

	waitForTime(sec)
	.then( () => timeIsOver = new Date().valueOf() )
	.then( () => compareTime( clicksDoneTime, timeIsOver ) )
	.then( () => console.log(timeIsOver <= clicksDoneTime ? true : false) )

	waitForClicks(clicksAmount)
	.then( () => clicksDoneTime = new Date().valueOf() )
	.then( () => compareTime( timeIsOver, clicksDoneTime ) )
	.then( () => console.log(timeIsOver <= clicksDoneTime ? true : false) )
}
