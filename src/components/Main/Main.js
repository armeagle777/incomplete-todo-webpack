import {NewTodo} from "../NewTodo/NewTodo";
import {Filter} from "../Filter/Filter";
import {Todo} from "../Todo/Todo";
import styles from "./main.module.css"

export function Main(todos) {
    let todoElements = ''
    for(let el of todos){
        todoElements += Todo(el)
    }
    return `
        <div class="${styles.main}">
            ${NewTodo()}
            ${Filter()}
            ${todoElements}
        </div>
    `
}