const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

const toDoFormSecond = document.getElementById("todo-formSecond");
const toDoInputSecond = document.querySelector("#todo-formSecond input");
const toDoListSecond = document.getElementById("todo-listSecond");
const TODOS_KEY_SECOND = "todosSecond";

const toDoFormThird = document.getElementById("todo-formThird");
const toDoInputThird = document.querySelector("#todo-formThird input");
const toDoListThird = document.getElementById("todo-listThird");
const TODOS_KEY_THIRD = "todosThird";

const toDoFormFourth = document.getElementById("todo-formFourth");
const toDoInputFourth = document.querySelector("#todo-formFourth input");
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
    console.log(numberOfTag);
    
    if(numberOfTag <= 9){  
        event.preventDefault();
        const newTodo = toDoInput.value;
        toDoInput.value = "";
        const newTodoObj = {
            text: newTodo,
            id: Date.now(),
        };
        toDos.push(newTodoObj);
        paintToDo(newTodoObj);
        saveToDos();
    } else{
    event.preventDefault();
    toDoInput.value = "";
    alert("The number of list is maximum now.");
    }
}

function handleToDoSubmitSecond(event) {
  const numberOfTag = toDoListSecond.childElementCount;

  console.log(numberOfTag);
  if(numberOfTag <=9){  
      event.preventDefault();
      const newTodoSecond = toDoInputSecond.value;
      toDoInputSecond.value = "";
      const newTodoObjSecond = {
          text: newTodoSecond,
          id: Date.now(),
      };
      toDosSecond.push(newTodoObjSecond);
      paintToDoSecond(newTodoObjSecond);
      saveToDosSecond();
  } else{
  event.preventDefault();
  toDoInputSecond.value = "";
  alert("The number of list is maximum now.");
  }
}

function handleToDoSubmitThird(event) {
  const numberOfTag = toDoListThird.childElementCount;

  console.log(numberOfTag);
  if(numberOfTag <=9){  
      event.preventDefault();
      const newTodoThird = toDoInputThird.value;
      toDoInputThird.value = "";
      const newTodoObjThird = {
          text: newTodoThird,
          id: Date.now(),
      };
      toDosThird.push(newTodoObjThird);
      paintToDoThird(newTodoObjThird);
      saveToDosThird();
  } else{
  event.preventDefault();
  toDoInputThird.value = "";
  alert("The number of list is maximum now.");
  }
}

function handleToDoSubmitFourth(event) {
  const numberOfTag = toDoListFourth.childElementCount;

  console.log(numberOfTag);
  if(numberOfTag <=9){  
      event.preventDefault();
      const newTodoFourth = toDoInputFourth.value;
      toDoInputFourth.value = "";
      const newTodoObjFourth = {
          text: newTodoFourth,
          id: Date.now(),
      };
      toDosFourth.push(newTodoObjFourth);
      paintToDoFourth(newTodoObjFourth);
      saveToDosFourth();
  } else{
  event.preventDefault();
  toDoInputFourth.value = "";
  alert("The number of list is maximum now.");
  }
}

toDoForm.addEventListener("submit", handleToDoSubmit);
toDoFormSecond.addEventListener("submit", handleToDoSubmitSecond);
toDoFormThird.addEventListener("submit", handleToDoSubmitThird);
toDoFormFourth.addEventListener("submit", handleToDoSubmitFourth);

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