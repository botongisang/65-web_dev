// Form Validation
function validateForm(event) {
    event.preventDefault();

    let isValid = true;

    // Name validation - required
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');
    if (name === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation - must include @
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    if (email === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!email.includes('@')) {
        emailError.textContent = 'Email must include @';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Password validation - min 6 characters
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        alert('Registration successful!');
        document.getElementById('registrationForm').reset();
    }
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark');
}
