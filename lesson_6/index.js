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
	modal2.classList.add('active');

	let formatInputValue = formatInput.value;

	if (validators.isBIC(formatInputValue)){
		formatResult.innerHTML = "BIC";
	} else if (validators.isCreditCard(formatInputValue)) {
		formatResult.innerHTML = "CreditCard";
	} else if (validators.isEAN13(formatInputValue)) {
		formatResult.innerHTML = "EAN13";
	} else if (validators.isEmail(formatInputValue)) {
		formatResult.innerHTML = "Email";
	} else if (validators.isEmpty(formatInputValue)) {
		formatResult.innerHTML = "Empty";
	} else if (validators.isFloat(formatInputValue)) {
		formatResult.innerHTML = "Float";
	} else if (validators.isIMEI(formatInputValue)) {
		formatResult.innerHTML = "IMEI";
	} else if (validators.isInteger(formatInputValue)) {
		formatResult.innerHTML = "Integer";
	} else if (validators.isIPv4(formatInputValue)) {
		formatResult.innerHTML = "IPv4";
	} else if (validators.isISBN(formatInputValue)) {
		formatResult.innerHTML = "ISBN";
	} else if (validators.isISSN(formatInputValue)) {
		formatResult.innerHTML = "ISSN";
	} else if (validators.isLuhn(formatInputValue)) {
		formatResult.innerHTML = "Luhn";
	} else if (validators.isMobilePhoneFr(formatInputValue)) {
		formatResult.innerHTML = "MobilePhoneFr";
	} else if (validators.isNIR(formatInputValue)) {
		formatResult.innerHTML = "NIR";
	} else if (validators.isRIB(formatInputValue)) {
		formatResult.innerHTML = "RIB";
	} else if (validators.isSEDOL(formatInputValue)) {
		formatResult.innerHTML = "SEDOL";
	} else if (validators.isSIREN(formatInputValue)) {
		formatResult.innerHTML = "SIREN";
	} else if (validators.isSIRET(formatInputValue)) {
		formatResult.innerHTML = "SIRET";
	} else if (validators.isDate(formatInputValue, {format:["DD-MM-YYYY"],min:new Date(1970,0,1)})) {
		formatResult.innerHTML = "Date";
	}
}

const closeModal2 = (event) => {
	modal2.classList.remove('active');
}

buttonCheck.addEventListener('click', getFormat);
btnCloseModal2.addEventListener('click', closeModal2);
