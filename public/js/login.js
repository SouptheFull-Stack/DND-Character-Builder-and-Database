// create function that will deal with logging in
// when the event occurs (form is submitted)
// prevent the page from refreshing
const loginFormHandler = async (event) => {
  event.preventDefault();
  // retrieve from the DOM the email and password entered
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  // if there are both a email and password
  if (email && password) {
    // post the info to the specified end point
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    // if the response was ok, redirect the user to the homepage
    // otherwise alert the user that log in failed
    if (response.ok) {
      document.location.replace('/');
    } else {
      const errorMessage = await response.json();
      alert(`Failed to log in: ${errorMessage.message || 'Unknown error'}`);
    }
  }
};

// create function that will deal with creating a new user
// when the event occurs (form is submitted)
// prevent the page from refreshing
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  // retrieve from the DOM the username and password entered
  if (username && email && password) {
    // post the info to the specified end point
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    // if the response was ok, redirect the user to the homepage
    // otherwise alert the user that sign up failed
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(`Failed to sign up.`);
    }
  }
};

// add event listeners to both forms
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);

// switching between login and register
const logInForm = document.getElementById('login-form');
const regForm = document.getElementById('signup-form');
const switchToRegBtn = document.getElementById('switch-to-reg');
const switchToLogBtn = document.getElementById('switch-to-log');

function switchLogReg(event) {
  event.preventDefault();
  if (logInForm.classList.contains('is-hidden')) {
    logInForm.classList.remove('is-hidden');
    regForm.classList.add('is-hidden');
  } else {
    logInForm.classList.add('is-hidden');
    regForm.classList.remove('is-hidden');
  }
}

switchToLogBtn.addEventListener('click', switchLogReg);
switchToRegBtn.addEventListener('click', switchLogReg);