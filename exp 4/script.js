// ==================== FORM VALIDATION ====================

// Validate entire form on submit
function validateForm(event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmValid = validateConfirmPassword();

    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmValid) {
        saveFormData();
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
        clearValidationStyles();
        updateStrengthIndicator('');
    }
}

// Name Validation
function validateName() {
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');
    const nameInput = document.getElementById('name');

    if (name === '') {
        nameError.textContent = 'Name is required';
        nameInput.classList.add('invalid');
        nameInput.classList.remove('valid');
        return false;
    } else if (name.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        nameInput.classList.add('invalid');
        nameInput.classList.remove('valid');
        return false;
    } else {
        nameError.textContent = '';
        nameInput.classList.add('valid');
        nameInput.classList.remove('invalid');
        return true;
    }
}

// Email Validation using Regex
function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const emailInput = document.getElementById('email');

    // Email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        emailError.textContent = 'Email is required';
        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');
        return false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');
        return false;
    } else {
        emailError.textContent = '';
        emailInput.classList.add('valid');
        emailInput.classList.remove('invalid');
        return true;
    }
}

// Phone Number Validation using Regex
function validatePhone() {
    const phone = document.getElementById('phone').value.trim();
    const phoneError = document.getElementById('phoneError');
    const phoneInput = document.getElementById('phone');

    // Phone regex: exactly 10 digits
    const phoneRegex = /^[0-9]{10}$/;

    if (phone === '') {
        phoneError.textContent = 'Phone number is required';
        phoneInput.classList.add('invalid');
        phoneInput.classList.remove('valid');
        return false;
    } else if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Please enter a valid 10-digit phone number';
        phoneInput.classList.add('invalid');
        phoneInput.classList.remove('valid');
        return false;
    } else {
        phoneError.textContent = '';
        phoneInput.classList.add('valid');
        phoneInput.classList.remove('invalid');
        return true;
    }
}

// Password Validation with Strength Check
function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const passwordInput = document.getElementById('password');

    // Update strength indicator
    updateStrengthIndicator(password);

    if (password === '') {
        passwordError.textContent = 'Password is required';
        passwordInput.classList.add('invalid');
        passwordInput.classList.remove('valid');
        return false;
    } else if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        passwordInput.classList.add('invalid');
        passwordInput.classList.remove('valid');
        return false;
    } else {
        passwordError.textContent = '';
        passwordInput.classList.add('valid');
        passwordInput.classList.remove('invalid');
        return true;
    }
}

// Password Strength Indicator
function updateStrengthIndicator(password) {
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');

    if (password.length === 0) {
        strengthBar.className = 'strength-bar';
        strengthText.textContent = '';
        return;
    }

    let strength = 0;

    // Length check
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;

    // Contains number
    if (/[0-9]/.test(password)) strength++;

    // Contains lowercase
    if (/[a-z]/.test(password)) strength++;

    // Contains uppercase
    if (/[A-Z]/.test(password)) strength++;

    // Contains special character
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    if (strength <= 2) {
        strengthBar.className = 'strength-bar weak';
        strengthText.textContent = 'Weak password';
        strengthText.style.color = '#dc3545';
    } else if (strength <= 4) {
        strengthBar.className = 'strength-bar medium';
        strengthText.textContent = 'Medium password';
        strengthText.style.color = '#ffc107';
    } else {
        strengthBar.className = 'strength-bar strong';
        strengthText.textContent = 'Strong password';
        strengthText.style.color = '#28a745';
    }
}

// Confirm Password Validation
function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmError = document.getElementById('confirmPasswordError');
    const confirmInput = document.getElementById('confirmPassword');

    if (confirmPassword === '') {
        confirmError.textContent = 'Please confirm your password';
        confirmInput.classList.add('invalid');
        confirmInput.classList.remove('valid');
        return false;
    } else if (password !== confirmPassword) {
        confirmError.textContent = 'Passwords do not match';
        confirmInput.classList.add('invalid');
        confirmInput.classList.remove('valid');
        return false;
    } else {
        confirmError.textContent = '';
        confirmInput.classList.add('valid');
        confirmInput.classList.remove('invalid');
        return true;
    }
}

// Clear validation styles
function clearValidationStyles() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('valid', 'invalid');
    });
    document.querySelectorAll('.error-message').forEach(span => {
        span.textContent = '';
    });
}

// Real-time validation on input
document.getElementById('name').addEventListener('input', validateName);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('phone').addEventListener('input', validatePhone);
document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('confirmPassword').addEventListener('input', validateConfirmPassword);


// ==================== DARK MODE TOGGLE ====================

function toggleDarkMode() {
    const body = document.body;
    const toggle = document.getElementById('darkModeToggle');

    body.classList.toggle('dark-mode');

    // Update button text
    if (body.classList.contains('dark-mode')) {
        toggle.textContent = '☀️ Light Mode';
        // Save preference to localStorage
        localStorage.setItem('darkMode', 'enabled');
    } else {
        toggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Load dark mode preference on page load
function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode');
    const toggle = document.getElementById('darkModeToggle');

    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        toggle.textContent = '☀️ Light Mode';
    }
}


// ==================== LOCAL STORAGE - FORM DATA ====================

function saveFormData() {
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        message: document.getElementById('message').value.trim(),
        timestamp: new Date().toLocaleString()
    };

    // Save to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Update display
    displayStoredData();
}

function displayStoredData() {
    const dataDisplay = document.getElementById('dataDisplay');
    const storedData = localStorage.getItem('formData');

    if (storedData) {
        const data = JSON.parse(storedData);
        dataDisplay.innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Message:</strong> ${data.message || 'No message'}</p>
            <p><strong>Submitted:</strong> ${data.timestamp}</p>
        `;
    } else {
        dataDisplay.innerHTML = '<p class="no-data">No data saved yet. Submit the form to save data.</p>';
    }
}

function clearStoredData() {
    localStorage.removeItem('formData');
    displayStoredData();
    alert('Saved data cleared!');
}


// ==================== INITIALIZE ON PAGE LOAD ====================

window.onload = function () {
    loadDarkModePreference();
    displayStoredData();
};
