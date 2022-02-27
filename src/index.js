import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import Icon from "./assets/favicon.ico";
import "./main.css"

const app =document.getElementById('app')
const Head = document.querySelector('head')


const icoLink = document.createElement('link')
icoLink.setAttribute('rel',"icon")
icoLink.setAttribute('type',"image/x-icon")
icoLink.href = Icon
Head.append(icoLink)


const localStorageTasks = localStorage.getItem('todos')
let todos = localStorageTasks ? JSON.parse(localStorageTasks) :  []


function deleteHandler(id){
    todos = todos.filter( el => el.id !== id)
    updateStorage(todos)
}

function changeCompleted(id){
    const updatedTodos = todos.map( el => {
        if(el.id === id){
            el.completed = !el.completed
        }
        return el
    })
    updateStorage(updatedTodos)
}


function addNewTask(){
    let todoText = document.getElementById('newTodoInput')
    if(todoText.value.trim().length > 0){
        const newTodo = new Todo(todoText.value.trim())
        todos.push(newTodo)
        updateStorage(todos)
        todoText.value = ''
    }
}

function updateStorage(tasksArray){
    localStorage.setItem('todos', JSON.stringify(tasksArray))
    loadPage()
}

function loadPage(){
    app.innerHTML = ''
    app.insertAdjacentHTML("beforeend", Header())
    app.insertAdjacentHTML("beforeend", Main(todos))
    app.insertAdjacentHTML("beforeend", Footer(todos))
}

function Todo(text){
    this.id = Date.now()
    this.description = text
    this.completed = false
}

window.addEventListener('load', loadPage)

window.addNewTask = addNewTask
window.loadPage = loadPage
window.changeCompleted = changeCompleted
window.deleteHandler = deleteHandler