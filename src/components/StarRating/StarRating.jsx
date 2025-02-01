import PropTypes from "prop-types"
import activeStar from "../../assets/icons/star-active.svg"
import inactiveStar from "../../assets/icons/star-inactive.svg"
import styles from "./StarRating.module.scss"


function StarRating({ rating }) {

    const maxStars = 5


    return (
        <div className={styles.stars}>
            {Array.from({ length: maxStars }, (_, index) => (
                <img
                    key={index}
                    src={index < rating ? activeStar : inactiveStar}
                    alt="Star"
                    className={styles.star}
                />
            ))}
        </div >
    )
}

StarRating.propTypes = {
    rating: PropTypes.string.isRequired
}



export default StarRating