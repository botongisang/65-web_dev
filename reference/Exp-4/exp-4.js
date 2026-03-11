const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");

const darkBtn = document.getElementById("darkModeBtn");

/* ---------- Load saved data ---------- */
window.onload = function () {
    if (localStorage.getItem("darkMode") === "on") {
        document.body.classList.add("dark");
    }

    nameInput.value = localStorage.getItem("name") || "";
    emailInput.value = localStorage.getItem("email") || "";
};

/* ---------- Form Validation ---------- */
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    if (!emailInput.value.includes("@")) {
        emailError.textContent = "Enter valid email";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    if (passInput.value.length < 6) {
        passError.textContent = "Password must be 6+ characters";
        valid = false;
    } else {
        passError.textContent = "";
    }

    // Save data if valid
    if (valid) {
        localStorage.setItem("name", nameInput.value);
        localStorage.setItem("email", emailInput.value);
        alert("Form submitted successfully!");
        form.reset();
    }
});

/* ---------- Dark Mode Toggle ---------- */
darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "on");
    } else {
        localStorage.setItem("darkMode", "off");
    }
});
