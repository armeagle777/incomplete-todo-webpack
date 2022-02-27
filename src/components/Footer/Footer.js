import styles from './footer.module.css'

export const Footer = (todos) => {
    const completedTodos = todos.filter(el => el.completed === true)
    return `
    <h3>Completed Tasks : ${completedTodos.length} / ${todos.length}</h3>
`
}
