import PropTypes from "prop-types"
import styles from "./Host.module.scss"

function Host({ picture, name }) {
    return (
        <div className={styles.host_info}>
            <span>{name}</span>
            <img src={picture} alt={name} />
        </div>
    )
}

Host.propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Host