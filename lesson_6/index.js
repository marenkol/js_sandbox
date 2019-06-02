import randomEmail from 'random-email';
import validator from 'email-validator';
import validators from 'format-validator';


// Task 1
const btnGenEmail = document.querySelector('.task1__btn');
const modal = document.querySelector('.task1__modal');
const btnCloseModal = document.querySelector('.task1__modal_close');
const emailWrap = document.querySelector('.task1__email');

const generateRandomEmail = (event) => {
	modal.classList.add('active');
	emailWrap.innerHTML = randomEmail();
}

const closeModal = (event) => {
	modal.classList.remove('active');
}

btnGenEmail.addEventListener('click', generateRandomEmail);
btnCloseModal.addEventListener('click', closeModal);



// Task 2
const emailInput = document.querySelector('#task2-input');

const validateEmail = () => {
	let inputValue = emailInput.value;

	if (inputValue === ""){
		emailInput.classList.remove('border-success');
		emailInput.classList.remove('border-danger');
		return;
	}

	if (validator.validate(inputValue)){
		emailInput.classList.remove('border-danger');
		emailInput.classList.add('border-success');
	} else{
		emailInput.classList.remove('border-success');
		emailInput.classList.add('border-danger');
	}
}

emailInput.addEventListener('change', validateEmail);


// Task 3
const formatInput = document.querySelector('#task3__input');
const buttonCheck = document.querySelector('.task3__checkbtn');
const modal2 = document.querySelector('.task3__modal');
const btnCloseModal2 = document.querySelector('.task3__modal_close');
const formatResult = document.querySelector('.task3__result');

const getFormat = () => {
	let formatInput = emailInput.value;

	modal2.classList.add('active');
	console.log('Task 3 getFormat()')
	// formatResult.innerHTML = randomEmail();
}

const closeModal2 = (event) => {
	modal2.classList.remove('active');
}

buttonCheck.addEventListener('click', getFormat);
btnCloseModal2.addEventListener('click', closeModal2);
