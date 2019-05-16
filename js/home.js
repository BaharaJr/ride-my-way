const signupModal = document.querySelector('.signup-form-wrapper');
const loginModal = document.querySelector('.login-form-wrapper');
const signupBtn = document.querySelector('.signup-btn');
const loginBtn = document.querySelector('.login-btn');
const signupx = document.querySelector('.signup-x');
const loginx = document.querySelector('.login-x');
const formContainer = document.querySelector('.form-container');

signupBtn.addEventListener('click', () => {
    signupModal.classList.add('display');
    formContainer.classList.add('disable');
});

loginBtn.addEventListener('click', () => {
    loginModal.classList.add('display');
    formContainer.classList.add('disable');
});

signupx.addEventListener('click', () => {
    signupModal.classList.remove('display');
    formContainer.classList.remove('disable');
});

loginx.addEventListener('click', () => {
    loginModal.classList.remove('display');
    formContainer.classList.remove('disable');
});