document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	const emailInput = document.getElementById('email');

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		checkEmail(emailInput);
	});

	function checkEmail(input) {
		const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!regex.test(input.value)) {
			emailInput.placeholder = "Whoops, make sure it's an email";
			emailInput.classList.remove('success');
			emailInput.classList.add('error');
		} else {
			emailInput.placeholder = 'Thank you for your submit';
			emailInput.classList.add('success');
			emailInput.classList.remove('error');
			emailInput.value = '';
		}
	}
});
