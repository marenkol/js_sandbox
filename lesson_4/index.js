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

makeImages('./space-1.jpg', './space-2.jpg', './space-3.jpg');
