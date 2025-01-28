import PropTypes from "prop-types"
import styles from "./Tag.module.scss"
function Tag({ tagname }) {
    return (
        <div className={styles.tag}>
            <span>{tagname}</span>
        </div>
    )
}

Tag.propTypes = {
    tagname: PropTypes.string.isRequired
};


export default Tag