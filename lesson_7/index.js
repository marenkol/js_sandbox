class MiniSlider {
	constructor(sliderID){
		this.miniSlider = document.querySelector(`#${sliderID}`);
		this.elements = this.miniSlider.querySelectorAll('.mini-slider__imagewrap');

		this.activeSlideIndex = 0;
		this.hideAll();
		this.show(this.activeSlideIndex);
		this.createButtons();

		this.nextBtn = this.miniSlider.querySelector('.mini-slider__next');
		this.nextBtn.addEventListener('click', this.next.bind(this));

		this.prevBtn = this.miniSlider.querySelector('.mini-slider__prev');
		this.prevBtn.addEventListener('click', this.prev.bind(this));
	}

	hideAll(){
		for (let i = 0; i < this.elements.length; i += 1) {
			this.elements[i].classList.add('hidden');
		}
	}

	show(n){
		this.elements[n].classList.remove('hidden');
		this.elements[n].classList.add('active');
	}

	createButtons(){
		const next = document.createElement('div');
		const prev = document.createElement('div');

		next.classList.add('mini-slider__next');
		prev.classList.add('mini-slider__prev');

		prev.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>';
		next.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>';

		this.miniSlider.appendChild(next);
		this.miniSlider.appendChild(prev);
	};


	next(){
		this.activeSlideIndex += 1;

		if( this.activeSlideIndex >= this.elements.length ){
			this.activeSlideIndex = 0;
		}

		this.hideAll();
		this.show(this.activeSlideIndex);
		// console.log(this.activeSlideIndex);
	}

	prev(){
		this.activeSlideIndex -= 1;

		if( this.activeSlideIndex < 0 ){
			this.activeSlideIndex = this.elements.length - 1;
		}

		this.hideAll();
		this.show(this.activeSlideIndex);
		// console.log(this.activeSlideIndex);
	}
}

window.MiniSlider  = MiniSlider;



