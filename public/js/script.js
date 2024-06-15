const logInForm = document.getElementById('login-form');
const regForm = document.getElementById('signup-form');
const switchToRegBtn = document.getElementById('switch-to-reg');
const switchToLogBtn = document.getElementById('switch-to-log');

function switchLogReg(event) {
  event.preventDefault();
  if (logInForm.classList.contains('is-hidden')) {
    console.log(`Switch to register`);
    logInForm.classList.remove('is-hidden');
    regForm.classList.add('is-hidden');
  } else {
    console.log(`Switch to login`);
    logInForm.classList.add('is-hidden');
    regForm.classList.remove('is-hidden');
  }
}

switchToLogBtn.addEventListener('click', switchLogReg);
switchToRegBtn.addEventListener('click', switchLogReg);
