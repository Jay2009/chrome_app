const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const btnChangeName = document.querySelector("#change-name");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  btnChangeName.classList.remove(HIDDEN_CLASSNAME);
  
}

btnChangeName.onclick = function(){
  localStorage.removeItem(USERNAME_KEY);
  greeting.classList.add(HIDDEN_CLASSNAME);
  
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  
  paintGreetings(savedUsername);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} 
else{
  paintGreetings(savedUsername);
 
}

