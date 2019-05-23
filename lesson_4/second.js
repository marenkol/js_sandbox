/*Part 2: print, в файле second.js
Создать функцию print, которая принимает один аргумент - размер фигуры, возвращает строку, в которой символы составляют “стрелку” нужного размера, работу иллюстрируют примеры (символ ` обозначает начало и конец строки, в задаче необходимо использовать символ переноса строки):*/


function print(size){
	let string = '';

	string = string + '\n';
	for ( let i = 0; i < size;  i++){
		string = string + '*';
		for ( let j = i; j < size-1; j++){
			string = string + ' ';
		}
		string = string + '*\n';
	}

	return string;
}

print(5);
