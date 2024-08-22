const passwordField = document.getElementById('password');
const emailField = document.getElementById('email');
const togglePasswordIcon = document.getElementById('toggle-password');
const loginForm = document.getElementById('loginForm');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Function to toggle the visibility of the password and the icon class
togglePasswordIcon.addEventListener('click', function () {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the icon's class between eye and eye-slash
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// Function to show the eye icon when the user types in the password field
passwordField.addEventListener('input', function () {
    if (passwordField.value.length > 0) {
        togglePasswordIcon.style.display = 'block'; // Show the icon
    } else {
        togglePasswordIcon.style.display = 'none';  // Hide the icon when input is cleared
    }

    // Remove error class when user types
    passwordField.classList.remove('input-error');
    passwordError.style.display = 'none';
});

emailField.addEventListener('input', function () {
    // Remove error class when user types
    emailField.classList.remove('input-error');
    emailError.style.display = 'none';
});

// Initially hide the icon
togglePasswordIcon.style.display = 'none';

// Validation function
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission to allow validation

    const emailValue = emailField.value.trim();
    const passwordValue = passwordField.value.trim();
    let isValid = true; // Flag to track if the form is valid

    // Reset previous error messages and input borders
    emailError.textContent = '';
    emailError.style.display = 'none';
    emailField.classList.remove('input-error');

    passwordError.textContent = '';
    passwordError.style.display = 'none';
    passwordField.classList.remove('input-error');

    // Validate email or phone number
    if (!validateEmail(emailValue) && !validatePhoneNumber(emailValue)) {
        emailError.style.display = 'block';
        emailField.classList.add('input-error');
        isValid = false;
    }

    // If validation passes, redirect to YouTube
    if (isValid) {
        window.location.href = "https://pinnacle.pnc.edu.ph/student/login"; // Redirect to YouTube
    }
});

// Function to validate email ending with @gmail.com
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@gmail\.com$/;
    return emailPattern.test(email);
}

// Function to validate 11-digit phone number
function validatePhoneNumber(phoneNumber) {
    const phonePattern = /^091\d{9}$/; // Assuming valid phone numbers start with '091' and are 11 digits long
    return phonePattern.test(phoneNumber);
}







