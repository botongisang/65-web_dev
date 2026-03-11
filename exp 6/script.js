// On window load: retrieve stored data and check theme
window.onload = function () {
    var storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        document.getElementById("username").value = storedUsername;
    }

    var storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
        document.body.classList.add("dark");
    }

    // Display previously saved data if available
    var savedData = localStorage.getItem("contactData");
    if (savedData) {
        var data = JSON.parse(savedData);
        displayData(data);
    }
};

// Validate email: must contain @
function validateEmail() {
    var email = document.getElementById("email").value;
    var errorSpan = document.getElementById("emailError");
    if (email.indexOf("@") === -1) {
        errorSpan.textContent = "Email must contain @ symbol.";
        return false;
    }
    errorSpan.textContent = "";
    return true;
}

// Validate phone: exactly 10 digits
function validatePhone() {
    var phone = document.getElementById("phone").value;
    var errorSpan = document.getElementById("phoneError");
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        errorSpan.textContent = "Phone must be exactly 10 digits.";
        return false;
    }
    errorSpan.textContent = "";
    return true;
}

// Validate password: minimum 6 characters
function validatePassword() {
    var password = document.getElementById("password").value;
    var errorSpan = document.getElementById("passwordError");
    if (password.length < 6) {
        errorSpan.textContent = "Password must be at least 6 characters.";
        return false;
    }
    errorSpan.textContent = "";
    return true;
}

// Form submit handler
function handleSubmit(event) {
    event.preventDefault();

    var isEmailValid = validateEmail();
    var isPhoneValid = validatePhone();
    var isPasswordValid = validatePassword();

    if (isEmailValid && isPhoneValid && isPasswordValid) {
        var data = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value
        };

        // Save to localStorage
        localStorage.setItem("username", data.username);
        localStorage.setItem("contactData", JSON.stringify(data));

        displayData(data);
        alert("Form submitted and data saved successfully!");
    }

    return false;
}

// Display saved data
function displayData(data) {
    var display = document.getElementById("displayArea");
    display.textContent = "";

    var usernameLabel = document.createElement("strong");
    usernameLabel.textContent = "Username:";
    display.appendChild(usernameLabel);
    display.appendChild(document.createTextNode(" " + data.username));
    display.appendChild(document.createElement("br"));

    var emailLabel = document.createElement("strong");
    emailLabel.textContent = "Email:";
    display.appendChild(emailLabel);
    display.appendChild(document.createTextNode(" " + data.email));
    display.appendChild(document.createElement("br"));

    var phoneLabel = document.createElement("strong");
    phoneLabel.textContent = "Phone:";
    display.appendChild(phoneLabel);
    display.appendChild(document.createTextNode(" " + data.phone));
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}
