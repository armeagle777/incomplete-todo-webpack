import styles from './newTodo.module.css'


export function NewTodo() {
    return `
        <div class="${styles.newTodo_container}">
            <input type="text" placeholder="Add new ..." id="newTodoInput">
            <button onclick="addNewTask()" class="${styles.add_button}">add</button>
        </div>
    `
}
