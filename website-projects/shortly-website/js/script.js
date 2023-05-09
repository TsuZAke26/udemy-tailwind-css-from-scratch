const input = document.getElementById('link-input');
const form = document.getElementById('link-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', formSubmit);

function validateUrl(value) {
	return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
		value
	);
}

function formSubmit(e) {
	e.preventDefault();
	console.log('Preventing form submission');

	if (input.value === '') {
		console.log('Empty input');
		errorMessage.innerHTML = 'Please enter something';
		input.classList.add('border-red');
	} else if (!validateUrl(input.value)) {
		console.log('Invalid URL');
		errorMessage.innerHTML = 'Please enter a valid URL';
		input.classList.add('border-red');
	} else {
		errorMessage.innerHTML = '';
		input.classList.remove('border-red');
	}
}