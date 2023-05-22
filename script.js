const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const submenu = document.querySelector('.submenu-items')

menuToggle.addEventListener('click', function () {
    menu.classList.toggle('show');
    submenu.classList.toggle('show')
});

const login_form = document.getElementById('loginForm');

form.addEventListener('submit', function (event) {

    event.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }

    if (passwordInput.value.trim() === '') {
        alert('Please enter your password.');
        passwordInput.focus();
        return;
    }

    alert('Form submitted successfully!');
    form.reset();
});


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const signup_form = document.getElementById('signupForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return;
    }

    if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }

    if (passwordInput.value.trim() === '' || passwordInput.value.trim().length < 6) {
        alert('Please enter a password with at least 6 characters.');
        passwordInput.focus();
        return;
    }

    alert('Form submitted successfully!');
    form.reset();
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
