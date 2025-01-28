import PropTypes from "prop-types"
import styles from "./Banner.module.scss"



function Banner({ image, title, alt }) {
    return (
        <>
            <div className={styles.banner}>
                <img src={image} alt={alt}></img>
                <h1>{title}</h1>
            </div>
        </>
    )
}

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    alt: PropTypes.string
}

export default Banner