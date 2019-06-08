class MiniSlider {
	constructor(sliderID){
		this.miniSlider = document.querySelector(`#${sliderID}`);

		// console.log(this.miniSlider)
		this.hideAll();
		this.show(1);
		this.createButtons();
	}

	hideAll(){
		const elements = this.miniSlider.querySelectorAll('img');
		// console.log(elements);

		for (let i = 0; i < elements.length; i += 1) {
			elements[i].classList.add('hidden');
		}
	}

	show(n){
		const elements = this.miniSlider.querySelectorAll('img');
		elements[n].classList.remove('hidden');
	}

	createButtons(){
		const next = document.createElement('div');
		const prev = document.createElement('div');

		next.classList.add('mini-slider__next');
		prev.classList.add('mini-slider__prev');
		console.log(next);

		prev.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>';
		next.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>';

		this.miniSlider.appendChild(next);
		this.miniSlider.appendChild(prev);
	}

	next(){

	}
}

window.MiniSlider  = MiniSlider;
