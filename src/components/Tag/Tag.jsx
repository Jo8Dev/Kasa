import styles from "./Tag.module.scss"
function Tag({ tagname }) {
    return (
        <div className={styles.tag}>
            <span>{tagname}</span>
        </div>
    )
}

export default Tag