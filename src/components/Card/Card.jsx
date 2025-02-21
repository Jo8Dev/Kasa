import { Link } from "react-router-dom"
import styles from "./Card.module.scss"
import PropTypes from "prop-types"

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

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default Card