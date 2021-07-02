const toDoForm =document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDoListSecond = document.getElementById("todo-listSecond");
const todoListThird = document.getElementById("todo-listThird");
const todoListForth = document.getElementById("todo-listForth");

const TODOS_KEY="todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id =newTodo.id;
    
    
    const span = document.createElement("span");
    span.innerText = newTodo.text + "  ";
    
    
    const button = document.createElement("button");
    button.style.displa="flex";
    button.innerText = "X";
    button.style.color = "red";
    button.style.border= "none";
    button.style.backgroundColor = "rgb(179, 174, 174)";
    button.style.opacity = "80%";
    button.style.borderRadius ="5px";
    button.style.margin = "10px";
    button.style.cursor= "pointer";
    const numberOfTag = document.getElementsByTagName("li").length;
    
    if(numberOfTag < 10){
        
        button.addEventListener("click",deleteToDo);
        li.appendChild(span);
        li.appendChild(button);
        toDoList.appendChild(li);
    }
    else if(numberOfTag >= 10 && numberOfTag < 20 ){
        console.log("the number of list is 9 now");
        button.addEventListener("click",deleteToDo);
        li.appendChild(span);
        li.appendChild(button);
        toDoListSecond.appendChild(li);
}

    else if(numberOfTag >= 20 && numberOfTag < 30 ){
        console.log("the number of list is 10 now");
        button.addEventListener("click",deleteToDo);
        li.appendChild(span);
        li.appendChild(button);
        todoListThird.appendChild(li);
}

    else if(numberOfTag >= 30 && numberOfTag < 40 ){
        console.log("the number of list is 11 now");
        button.addEventListener("click",deleteToDo);
        li.appendChild(span);
        li.appendChild(button);
        todoListForth.appendChild(li);
}
    else{
        
    }
}




function handleToDoSubmit() {
    
    const numberOfTag = document.getElementsByTagName("li").length;
    console.log(numberOfTag);
    if(numberOfTag <= 40){  
        event.preventDefault();
        const newTodo = toDoInput.value;
        toDoInput.value = "";
        const newTodoObj ={
            text:newTodo,
            id: Date.now(),
        };
        toDos.push(newTodoObj);
        paintToDo(newTodoObj);
        saveToDos();
    } else if(numberOfTag > 40){
        alert("You have too many assets!");
        }
    

}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

