const toDoForm = document.getElementById("todo-form");
const totalForm = document.getElementById("total-form");
const toDoInput = document.querySelector("#todo-form input");
const toTalMoneyInput = document.querySelector("#total-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

const toDoFormSecond = document.getElementById("todo-formSecond");
const totalFormSecond = document.getElementById("total-formSecond");
const toDoInputSecond = document.querySelector("#todo-formSecond input");
const toTalMoneyInputSecond = document.querySelector("#total-formSecond input");
const toDoListSecond = document.getElementById("todo-listSecond");
const TODOS_KEY_SECOND = "todosSecond";

const toDoFormThird = document.getElementById("todo-formThird");
const totalFormThird = document.getElementById("total-formThird");
const toDoInputThird = document.querySelector("#todo-formThird input");
const toTalMoneyInputThird = document.querySelector("#total-formThird input");
const toDoListThird = document.getElementById("todo-listThird");
const TODOS_KEY_THIRD = "todosThird";

const toDoFormFourth = document.getElementById("todo-formFourth");
const totalFormFourth = document.getElementById("total-formFourth");
const toDoInputFourth = document.querySelector("#todo-formFourth input");
const toTalMoneyInputFourth = document.querySelector("#total-formFourth input");
const toDoListFourth = document.getElementById("todo-listFourth");
const TODOS_KEY_FOURTH = "todosFourth";

let toDos = [];
let toDosSecond = [];
let toDosThird = [];
let toDosFourth = [];


function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function saveToDosSecond() {
    localStorage.setItem(TODOS_KEY_SECOND, JSON.stringify(toDosSecond));
  }
function saveToDosThird() {
  localStorage.setItem(TODOS_KEY_THIRD, JSON.stringify(toDosThird));
}
function saveToDosFourth() {
    localStorage.setItem(TODOS_KEY_FOURTH, JSON.stringify(toDosFourth));
  }


function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
function deleteToDoSecond(event) {
  const li = event.target.parentElement;
  li.remove();
  toDosSecond = toDosSecond.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDosSecond();
}
function deleteToDoThird(event) {
  const li = event.target.parentElement;
  li.remove();
  toDosThird = toDosThird.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDosThird();
}
function deleteToDoFourth(event) {
  const li = event.target.parentElement;
  li.remove();
  toDosFourth = toDosFourth.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDosFourth();
}


function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text + "  ";

  const button = document.createElement("button");
    button.innerText = "X";
    button.style.color = "red";
    button.style.border= "none";
    button.style.backgroundColor = "rgb(179, 174, 174)";
    button.style.opacity = "80%";
    button.style.borderRadius ="5px";
    button.style.margin = "10px";
    button.style.cursor= "pointer";

    button.addEventListener("click",deleteToDo);  
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);    
}

function paintToDoSecond(newTodoSecond) {
  const li = document.createElement("li");
  li.id = newTodoSecond.id;

  const span = document.createElement("span");
  span.innerText = newTodoSecond.text + "  ";

  const button = document.createElement("button");
    button.innerText = "X";
    button.style.color = "red";
    button.style.border= "none";
    button.style.backgroundColor = "rgb(179, 174, 174)";
    button.style.opacity = "80%";
    button.style.borderRadius ="5px";
    button.style.margin = "10px";
    button.style.cursor= "pointer";
    
    button.addEventListener("click",deleteToDoSecond);  
    li.appendChild(span);
    li.appendChild(button);
    toDoListSecond.appendChild(li);    
}

function paintToDoThird(newTodoThird) {
  const li = document.createElement("li");
  li.id = newTodoThird.id;

  const span = document.createElement("span");
  span.innerText = newTodoThird.text + "  ";

  const button = document.createElement("button");
    button.innerText = "X";
    button.style.color = "red";
    button.style.border= "none";
    button.style.backgroundColor = "rgb(179, 174, 174)";
    button.style.opacity = "80%";
    button.style.borderRadius ="5px";
    button.style.margin = "10px";
    button.style.cursor= "pointer";
    
    button.addEventListener("click",deleteToDoThird);  
    li.appendChild(span);
    li.appendChild(button);
    toDoListThird.appendChild(li);    
}

function paintToDoFourth(newTodoFourth) {
  const li = document.createElement("li");
  li.id = newTodoFourth.id;

  const span = document.createElement("span");
  span.innerText = newTodoFourth.text + "  ";

  const button = document.createElement("button");
    button.innerText = "X";
    button.style.color = "red";
    button.style.border= "none";
    button.style.backgroundColor = "rgb(179, 174, 174)";
    button.style.opacity = "80%";
    button.style.borderRadius ="5px";
    button.style.margin = "10px";
    button.style.cursor= "pointer";
    
    button.addEventListener("click",deleteToDoFourth);  
    li.appendChild(span);
    li.appendChild(button);
    toDoListFourth.appendChild(li);    
}


function handleToDoSubmit(event) { 
const numberOfTag = toDoList.childElementCount;

  if(toDoInput.value != ""){
    if(numberOfTag <= 9){  
        event.preventDefault();
        const newTodo = toDoInput.value;
        toDoInput.value = "";

        const newTotalMoney = toTalMoneyInput.value;
        toTalMoneyInput.value = "";

        const newTodoObj = {
            text: newTodo,
            id: Date.now(),
            value: newTotalMoney,
        };
        toDos.push(newTodoObj);
        paintToDo(newTodoObj);
        saveToDos();
        toDoInput.focus();
    } else{
    event.preventDefault();
    toDoInput.value = "";
    toTalMoneyInput.value = "";
    alert("The number of list is maximum now.");
    }
  }else{
    event.preventDefault();
    alert("Please type the name of stock");
    toDoInput.focus();
  }
}

function handleToDoSubmitSecond(event) {
  const numberOfTag = toDoListSecond.childElementCount;

  if(toDoInputSecond.value != ""){
    if(numberOfTag <=9){  
      event.preventDefault();
      const newTodoSecond = toDoInputSecond.value;
      toDoInputSecond.value = "";

      const newTotalMoneySecond = toTalMoneyInputSecond.value;
      toTalMoneyInputSecond.value = "";

      const newTodoObjSecond = {
          text: newTodoSecond,
          id: Date.now(),
          value: newTotalMoneySecond,
      };
      toDosSecond.push(newTodoObjSecond);
      paintToDoSecond(newTodoObjSecond);
      saveToDosSecond();
      toDoInputSecond.focus();
    } else{
    event.preventDefault();
    toDoInputSecond.value = "";
    toTalMoneyInputSecond.value = "";
    alert("The number of list is maximum now.");
    }
  }else {
    event.preventDefault();
    alert("Please type the name of stock");
    toDoInputSecond.focus();
  }
}

function handleToDoSubmitThird(event) {
  const numberOfTag = toDoListThird.childElementCount;

  if(toDoInputThird.value != ""){
    if(numberOfTag <=9){  
      event.preventDefault();

      const newTodoThird = toDoInputThird.value;
      toDoInputThird.value = "";

      const newTotalMoneyThird = toTalMoneyInputThird.value;
      toTalMoneyInputThird.value = "";

      const newTodoObjThird = {
          text: newTodoThird,
          id: Date.now(),
          value: newTotalMoneyThird,
          
      };
      toDosThird.push(newTodoObjThird);
      paintToDoThird(newTodoObjThird);
      saveToDosThird();
      toDoInputThird.focus();
    } else{
    event.preventDefault();
    toDoInputThird.value = "";
    toTalMoneyInputThird.value = "";
    alert("The number of list is maximum now.");
    }
  }else{
    event.preventDefault();
    alert("Please type the name of stock");
    toDoInputThird.focus();
  }
}

function handleToDoSubmitFourth(event) {
  const numberOfTag = toDoListFourth.childElementCount;

  if(toDoInputFourth.value != ""){ 
    if(numberOfTag <=9){  
      event.preventDefault();
      const newTodoFourth = toDoInputFourth.value;
      toDoInputFourth.value = "";
      
      const newTotalMoneyFourth = toTalMoneyInputFourth.value;
      toTalMoneyInputFourth.value = "";

      const newTodoObjFourth = {
          text: newTodoFourth,
          id: Date.now(),
          value: newTotalMoneyFourth,
      };
      toDosFourth.push(newTodoObjFourth);
      paintToDoFourth(newTodoObjFourth);
      saveToDosFourth();
      toDoInputFourth.focus();
    } else{
    event.preventDefault();
    toDoInputFourth.value = "";
    toTalMoneyInputFourth.value = "";
    alert("The number of list is maximum now.");
    }
  }else{
    event.preventDefault();
    alert("Please type the name of stock");
    toDoInputFourth.focus();
  }
}
function nextInput(event){
  event.preventDefault();
  toTalMoneyInput.focus(); 
}
function nextInputSecond(event){
  event.preventDefault();
  toTalMoneyInputSecond.focus();
}
function nextInputThird(event){
  event.preventDefault();
  toTalMoneyInputThird.focus();
}
function nextInputFourth(event){
  event.preventDefault();
  toTalMoneyInputFourth.focus();
}


toDoForm.addEventListener("submit", nextInput);
totalForm.addEventListener("submit", handleToDoSubmit);

toDoFormSecond.addEventListener("submit", nextInputSecond);
totalFormSecond.addEventListener("submit", handleToDoSubmitSecond);

toDoFormThird.addEventListener("submit", nextInputThird);
totalFormThird.addEventListener("submit", handleToDoSubmitThird);

toDoFormFourth.addEventListener("submit", nextInputFourth);
totalFormFourth.addEventListener("submit", handleToDoSubmitFourth);

const savedToDos = localStorage.getItem(TODOS_KEY);
const savedToDosSecond = localStorage.getItem(TODOS_KEY_SECOND);
const savedToDosThird = localStorage.getItem(TODOS_KEY_THIRD);
const savedToDosFourth = localStorage.getItem(TODOS_KEY_FOURTH);


if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

if (savedToDosSecond !== null) {
  const parsedToDosSecond = JSON.parse(savedToDosSecond);
  toDosSecond = parsedToDosSecond;
  parsedToDosSecond.forEach(paintToDoSecond);
}

if (savedToDosThird !== null) {
  const parsedToDosThird = JSON.parse(savedToDosThird);
  toDosThird = parsedToDosThird;
  parsedToDosThird.forEach(paintToDoThird);
}

if (savedToDosFourth !== null) {
  const parsedToDosFourth = JSON.parse(savedToDosFourth);
  toDosFourth = parsedToDosFourth;
  parsedToDosFourth.forEach(paintToDoFourth);
}