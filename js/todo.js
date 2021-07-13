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

const toDoFormFifth = document.getElementById("todo-formFifth");
const totalFormFifth = document.getElementById("total-formFifth");
const toDoInputFifth = document.querySelector("#todo-formFifth input");
const toTalMoneyInputFifth = document.querySelector("#total-formFifth input");
const toDoListFifth = document.getElementById("todo-listFifth");
const TODOS_KEY_FIFTH = "todosFifth";

const toDoFormSixth = document.getElementById("todo-formSixth");
const totalFormSixth = document.getElementById("total-formSixth");
//const toDoInputSixth = document.querySelector("#todo-formSixh input");
const toTalMoneyInputSixth = document.querySelector("#total-formSixth input");
const toDoListSixth = document.getElementById("todo-listSixth");
const TODOS_KEY_SIXTH = "todosSixth";

const savedToDos = localStorage.getItem(TODOS_KEY);
const savedToDosSecond = localStorage.getItem(TODOS_KEY_SECOND);
const savedToDosThird = localStorage.getItem(TODOS_KEY_THIRD);
const savedToDosFourth = localStorage.getItem(TODOS_KEY_FOURTH);
const savedToDosFifth = localStorage.getItem(TODOS_KEY_FIFTH);
const savedToDosSixth = localStorage.getItem(TODOS_KEY_SIXTH);

let toDos = [];
let toDosSecond = [];
let toDosThird = [];
let toDosFourth = [];
let toDosFifth = [];
let toDosSixth = [];

let sumNum = 0;
let sumNumSecond = 0;
let sumNumThird = 0;
let sumNumFourth = 0;
let sumNumFifth = 0;
let sumNumSixth = 0;

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
  function saveToDosFifth() {
    localStorage.setItem(TODOS_KEY_FIFTH, JSON.stringify(toDosFifth));
  }
  function saveToDosSixth() {
    localStorage.setItem(TODOS_KEY_SIXTH, JSON.stringify(toDosSixth));
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

function deleteToDoFifth(event) {
  const li = event.target.parentElement;
  li.remove();
  toDosFifth = toDosFifth.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDosFifth();
}

function deleteToDoSixth(event) {
  const li = event.target.parentElement;
  li.remove();
  toDosSixth = toDosSixth.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDosSixth();
}


function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
    
  button.addEventListener("click",deleteToDo);  
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);  
  

  span.innerText  = newTodo.text + " : " + newTodo.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ "원";
  console.log(span.scrollWidth);
  const onlyNumber = parseInt(newTodo.value);
  sumNum = onlyNumber + sumNum;
  console.log(sumNum);
  
}


function paintToDoSecond(newTodoSecond) {
  const li = document.createElement("li");
  li.id = newTodoSecond.id;

  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
    
  button.addEventListener("click",deleteToDoSecond);  
  li.appendChild(span);
  li.appendChild(button);
  toDoListSecond.appendChild(li);
    
  span.innerText  = newTodoSecond.text + " : " + newTodoSecond.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ "원";

  const onlyNumber = parseInt(newTodoSecond.value);
  sumNumSecond = onlyNumber + sumNumSecond;
}

function paintToDoThird(newTodoThird) {
  const li = document.createElement("li");
  li.id = newTodoThird.id;

  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";

  button.addEventListener("click",deleteToDoThird);  
  li.appendChild(span);
  li.appendChild(button);
  toDoListThird.appendChild(li);    

  span.innerText  = newTodoThird.text + " : " + newTodoThird.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ "원";
  const onlyNumber = parseInt(newTodoThird.value);
  sumNumThird = onlyNumber + sumNumThird;
}

function paintToDoFourth(newTodoFourth) {
  const li = document.createElement("li");
  li.id = newTodoFourth.id;

  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  
  button.addEventListener("click",deleteToDoFourth);  
  li.appendChild(span);
  li.appendChild(button);
  toDoListFourth.appendChild(li);
  
  span.innerText  = newTodoFourth.text + " : " + newTodoFourth.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ "원";
  const onlyNumber = parseInt(newTodoFourth.value);
  sumNumFourth = onlyNumber + sumNumFourth;
}
function paintToDoFifth(newTodoFifth) {
  const li = document.createElement("li");
  li.id = newTodoFifth.id;

  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  
  button.addEventListener("click",deleteToDoFifth);  
  li.appendChild(span);
  li.appendChild(button);
  toDoListFifth.appendChild(li);
  
  span.innerText  = newTodoFifth.text + " : " + newTodoFifth.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ "원";
  const onlyNumber = parseInt(newTodoFifth.value);
  sumNumFifth = onlyNumber + sumNumFifth;
}
function paintToDoSixth(newTotalMoneySixth) {
  const li = document.createElement("li");
  li.id = newTotalMoneySixth.id;

  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  
  button.addEventListener("click",deleteToDoSixth);  
  li.appendChild(span);
  li.appendChild(button);
  toDoListSixth.appendChild(li);
  
  span.innerText  = newTotalMoneySixth.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ "원";
  const onlyNumber = parseInt(newTotalMoneySixth.value);
  sumNumSixth = onlyNumber + sumNumSixth;
}


function maxNumberLength(object){
  if(object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }
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

function handleToDoSubmitFifth(event) {
  const numberOfTag = toDoListFifth.childElementCount;

  if(toDoInputFifth.value != ""){ 
    if(numberOfTag <=9){  
      event.preventDefault();
      const newTodoFifth = toDoInputFifth.value;
      toDoInputFifth.value = "";
      
      const newTotalMoneyFifth = toTalMoneyInputFifth.value;
      toTalMoneyInputFifth.value = "";

      const newTodoObjFifth = {
          text: newTodoFifth,
          id: Date.now(),
          value: newTotalMoneyFifth,
      };
      toDosFifth.push(newTodoObjFifth);
      paintToDoFifth(newTodoObjFifth);
      saveToDosFifth();
      toDoInputFifth.focus();
    } else{
    event.preventDefault();
    toDoInputFifth.value = "";
    toTalMoneyInputFifth.value = "";
    alert("The number of list is maximum now.");
    }
  }else{
    event.preventDefault();
    alert("Please type the name of stock");
    toDoInputFifth.focus();
  }
}

function handleToDoSubmitSixth(event) {
  const numberOfTag = toDoListSixth.childElementCount;

    if(numberOfTag <1){  
      event.preventDefault();
      const newTotalMoneySixth = toTalMoneyInputSixth.value;
      toTalMoneyInputSixth.value = "";

      const newTodoObjSixth = {
          id: Date.now(),
          value: newTotalMoneySixth,
      };
      toDosSixth.push(newTodoObjSixth);
      paintToDoSixth(newTodoObjSixth);
      saveToDosSixth();
      
    } else{
    event.preventDefault();
    toTalMoneyInputSixth.value = "";
    alert("The number of list is maximum now.");
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
function nextInputFifth(event){
  event.preventDefault();
  toTalMoneyInputFifth.focus();
}



toDoForm.addEventListener("submit", nextInput);
totalForm.addEventListener("submit", handleToDoSubmit);

toDoFormSecond.addEventListener("submit", nextInputSecond);
totalFormSecond.addEventListener("submit", handleToDoSubmitSecond);

toDoFormThird.addEventListener("submit", nextInputThird);
totalFormThird.addEventListener("submit", handleToDoSubmitThird);

toDoFormFourth.addEventListener("submit", nextInputFourth);
totalFormFourth.addEventListener("submit", handleToDoSubmitFourth);

toDoFormFifth.addEventListener("submit", nextInputFifth);
totalFormFifth.addEventListener("submit", handleToDoSubmitFifth);


totalFormSixth.addEventListener("submit", handleToDoSubmitSixth);

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

if (savedToDosFifth !== null) {
  const parsedToDosFifth = JSON.parse(savedToDosFifth);
  toDosFifth = parsedToDosFifth;
  parsedToDosFifth.forEach(paintToDoFifth);
}

if (savedToDosSixth !== null) {
  const parsedToDosSixth = JSON.parse(savedToDosSixth);
  toDosSixth = parsedToDosSixth;
  parsedToDosSixth.forEach(paintToDoSixth);
}