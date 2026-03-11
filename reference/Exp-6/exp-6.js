const form = document.getElementById("contactForm");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passError = document.getElementById("passError");

const savedData = document.getElementById("savedData");
const darkToggle = document.getElementById("darkToggle");

/* ---------- Load saved data on refresh ---------- */
window.onload = function () {
    if (localStorage.getItem("darkMode") === "on") {
        document.body.classList.add("dark");
    }

    const storedEmail = localStorage.getItem("email");
    const storedPhone = localStorage.getItem("phone");

    if (storedEmail && storedPhone) {
        savedData.innerText = `Email: ${storedEmail}, Phone: ${storedPhone}`;
    }
};

/* ---------- Form Validation ---------- */
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    // Email validation
    if (!email.value.includes("@")) {
        emailError.innerText = "Invalid email format";
        valid = false;
    } else {
        emailError.innerText = "";
    }

    // Phone validation (10 digits)
    if (phone.value.length !== 10 || isNaN(phone.value)) {
        phoneError.innerText = "Enter 10-digit phone number";
        valid = false;
    } else {
        phoneError.innerText = "";
    }

    // Password validation
    if (password.value.length < 6) {
        passError.innerText = "Password must be at least 6 characters";
        valid = false;
    } else {
        passError.innerText = "";
    }

    // Save if valid
    if (valid) {
        localStorage.setItem("email", email.value);
        localStorage.setItem("phone", phone.value);

        savedData.innerText = `Email: ${email.value}, Phone: ${phone.value}`;
        alert("Form submitted successfully!");
        form.reset();
    }
});

/* ---------- Dark Mode Toggle ---------- */
darkToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "on");
    } else {
        localStorage.setItem("darkMode", "off");
    }
});
