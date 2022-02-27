import styles from "./filter.module.css"

export function Filter(){
    return `
        <div class="${styles.filter_container}">
            <select name="status" id="" class="${styles.status_select}">
                <option value="">All</option>
                <option value="">Completed</option>
                <option value="">Active</option>
                <option value="">Has Due date</option>
            </select>
            <select name="sort" id="" class="${styles.sort_select}">
                <option value="">Added date</option>
                <option value="">Due date</option>
            </select>
        </div>
    `
}
