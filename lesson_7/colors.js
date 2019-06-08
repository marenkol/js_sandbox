// Task 1
class Color {
	constructor( r, g, b ){
		this.r = r;
		this.g = g;
		this.b = b;
	}

	toString(){
		return `rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`;
	}

	toBlack(){
		this.r = 0;
		this.g = 0;
		this.b = 0;
	}

	toWhite(){
		this.r = 255;
		this.g = 255;
		this.b = 255;
	}

	getLightness(){
		return (this.r + this.g + this.b) / 3;
	}

	toGrayscale(){
		const lightness = this.getLightness();
		this.r = lightness;
		this.g = lightness;
		this.b = lightness;
	}

	invert(){
		const max = 255;
		this.r = max - this.r;
		this.g = max - this.g;
		this.b = max - this.b;
	}

	random(){
		const max = 255;
		const min = 0;
		this.r = Math.floor(Math.random()*(max-min+1)+min);
		this.g = Math.floor(Math.random()*(max-min+1)+min);
		this.b = Math.floor(Math.random()*(max-min+1)+min);
	}
}
