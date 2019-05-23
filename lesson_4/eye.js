
// Task 1
const circle = document.querySelectorAll('.eyes__eyeblack');

window.addEventListener('mousemove', (event) => {
	let x = `${event.clientX * 100 / window.innerWidth}%`;
	let y = `${event.clientY * 100 / window.innerHeight}%`;

	for ( let i = 0; i < 2; i++ ){
		circle[i].style.left = x;
		circle[i].style.top = y;
		circle[i].style.transform = `translate(-${x}, -${y})`;
	}
} );

