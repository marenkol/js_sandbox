import randomEmail from 'random-email';
import validator from 'email-validator';


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
const emailInput = document.querySelector('#email-input');

const validateEmail = () => {
	let inputValue = emailInput.value;
	console.log(inputValue);

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
