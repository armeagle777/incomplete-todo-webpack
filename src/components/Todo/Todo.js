import styles from "./todo.module.css"
import Trash from "../../assets/trash.png"
import Pen from "../../assets/pencil.png"


export function Todo({description, completed,id}){
    return `
        <div class="${styles.todo_container}">
            <input type="checkbox" ${completed && 'checked'} onclick="changeCompleted(${id})">
            <input type="text" value="${description}" >
            <div class="${styles.todo_info}">
                <span class="${styles.date}"> 28th Jun 2020</span>
                <div>
                    <input type="image" src="${Pen}" class="${styles.pen}">
                    <input type="image" src="${Trash}" class="${styles.trash}" onclick="deleteHandler(${id})">               
                </div>
            </div>
        </div>
    `
}