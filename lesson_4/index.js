/* Part 1:
Создать функцию makeImages, которая принимает бесконечное количество аргументов - ссылок на изображения, и должна создать для каждой ссылки тег img, с соответствующим адресом, и добавить в body обернутой каждую в свой div. Пример:
makeImages('./img_1.png', './img_2.png', './img_3.png');
Результат должен получиться следующий:
<body>
   <script src="index.js"></script>
   <div><img src="./img_1.png"></div>
   <div><img src="./img_3.png"></div>
   <div><img src="./img_3.png"></div>
</body>*/

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



/* Part 2:
Создать класс FormBuilder, который имеет следующие методы:
В конструкторе создает свой собственный элемент form, но не добавляет его никуда
appendTo(target), где target - html элемент, добавляет свой элемент form внутрь элемента target
addInput(name) - создает элемент input с типом text, атрибутом “name”=name и ложит его внутрь form
addCheckbox(name) - создает элемент input с типом checkbox, атрибутом “name”=name и ложит его внутрь form
addButton(name) - создает элемент button, текстом name и ложит его внутрь form
	destroy() - убирает элемент form из html, Подсказка: parentElement, removeChild
Под form, везде имеется один и тот же элемент созданный в конструкторе.*/

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
