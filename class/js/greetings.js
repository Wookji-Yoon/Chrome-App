//변수//
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greetingForm = document.querySelector(".greeting-form");
const greetingText = document.querySelector(".greeting-form h1");
//string 변수//
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername != null) {
  showGreetings(savedUsername);
}
loginForm.addEventListener("submit", onLoginSubmit);
greetingForm.addEventListener("submit", onLogoutSubmit);

function onLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  showGreetings(savedUsername);
}

function onLogoutSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(USERNAME_KEY);
  showLogin();
}

function showGreetings(username) {
  greetingText.innerText = `Hello, ${username}!`;
  greetingForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}
function showLogin() {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greetingForm.classList.add(HIDDEN_CLASSNAME);
}
