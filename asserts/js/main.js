// Variable Declaration

// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
	const loginBtn = document.querySelector('#Login');
	const registerBtn = document.querySelector('#register');
	const loginForm = document.querySelector('.login-form');
	const registerForm = document.querySelector('.register-form');

	if (loginBtn && registerBtn && loginForm && registerForm) {
		// Login button function
		loginBtn.addEventListener('click', () => {
			loginBtn.style.backgroundColor = 'rgba(139, 195, 74, 1)';
			registerBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
			loginForm.style.left = '50%';
			registerForm.style.left = '-50%';
			loginForm.style.opacity = '1';
			registerForm.style.opacity = '0';
			document.querySelector('.col-1').style.borderRadius = '0 30% 20% 0 ';
		});
		// Register button function
		registerBtn.addEventListener('click', () => {
			loginBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
			registerBtn.style.backgroundColor = ' rgba(139, 195, 74, 1)';
			loginForm.style.left = '150%';
			registerForm.style.left = '50%';
			loginForm.style.opacity = '0';
			registerForm.style.opacity = '1';
			document.querySelector('.col-1').style.borderRadius = '0 20% 30% 0 ';
		});
	} else {
		console.error('One or more elements not found');
	}
});
