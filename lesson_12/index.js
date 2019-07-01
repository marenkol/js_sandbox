/********************************
	TODO
********************************/
const todoList = document.querySelector('.todo-list');
const todoItemCounter = document.querySelector('.todo-count');
// const clearCompleted = document.querySelector('.clear-completed');
const main = document.querySelector('.main');
const toggleAll = document.querySelector('.toggle-all');
const newTodo = document.querySelector('.new-todo');
// const footer = document.querySelector('.footer');

let intutText = null;
let resultListArr = [];
let listItemID = 0;


//===========================================
function itemCounter(a) {
    return a + " item" + (1 !== a ? "s" : "") + " left"
};


//===========================================
let completedCounter = 0;
function globalTasksCounter(arr) {
	arr.forEach( element => {
		if ( !element.status ){
			completedCounter += 1;
		}
	});

	todoItemCounter.innerHTML = itemCounter(arr.length - completedCounter);
	completedCounter = 0;
}


//==========================================
function setLocalStorage(arr) {
	localStorage.setItem('todoTasks', arr)
}


//==========================================
function getTasksFromLocalStorage(){
	if(localStorage['todoTasks']){
		return JSON.parse(localStorage.getItem('todoTasks'));
	} else {
		return [];
	}
};
resultListArr = getTasksFromLocalStorage();

if ( resultListArr.length ){
	resultListArr.forEach( element  => {
		let newLi = document.createElement(element.el);
		newLi.innerHTML = element.innerHTML;

		if( !element.status ){
			newLi.classList.add("completed");
			newLi.querySelector('.toggle').setAttribute('checked', 'checked')
		}

			// lestener for completed tasks
			newLi.querySelector('.toggle').addEventListener('click', function toggleTask(){
				element.status = !element.status; // change status

				setLocalStorage(JSON.stringify(resultListArr));
				globalTasksCounter(resultListArr);

				newLi.classList.toggle("completed");
			});

			todoList.appendChild(newLi);
		});

	globalTasksCounter(resultListArr);

	main.style.display = 'block';
}

// console.log(resultListArr)

//===========================================
const addNewItem = event => {
	inputText = event.target.value;
	if ( inputText ){
		resultListArr.unshift({
			text: inputText,
			el: 'li',
			status: true,
			innerHTML: `<div class="view"><input class="toggle" type="checkbox"><label>${inputText}</label><button class="destroy"></button></div>`
		});


		// show tasks section
		if (resultListArr.length){
			globalTasksCounter(resultListArr);

			main.style.display = 'block';

			setLocalStorage(JSON.stringify(resultListArr));
		}

		// Show current task on page
		todoList.innerHTML = '';


		resultListArr.forEach( element  => {
			let newLi = document.createElement(element.el);
			newLi.innerHTML = element.innerHTML;

			if( !element.status ){
				newLi.classList.add("completed");
				newLi.querySelector('.toggle').setAttribute('checked', 'checked')
			}

			// lestener for completed tasks
			newLi.querySelector('.toggle').addEventListener('click', function toggleTask(){
				element.status = !element.status; // change status

				setLocalStorage(JSON.stringify(resultListArr));
				globalTasksCounter(resultListArr);

				newLi.classList.toggle("completed");
			});

			todoList.appendChild(newLi);
		});



		// reset
		newTodo.value = '';
		inputText = null;
	}
}
newTodo.addEventListener('change', addNewItem)



