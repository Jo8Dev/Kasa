import { Link } from "react-router-dom"
import styles from "./Card.module.scss"

function Card({ title, cover, id }) {

    return (

        < article >
            <Link to={`/lodging/${id}`} className={styles.card}>
                <h2>{title}</h2>
                <img src={cover} alt={title} />
            </Link>
        </article >
    )
}

export default Card