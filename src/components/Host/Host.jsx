import styles from "./Host.module.scss"

function Host({ picture, name }) {
    return (
        <div className={styles.host_info}>
            <span>{name}</span>
            <img src={picture} alt={name} />
        </div>
    )
}

export default Host