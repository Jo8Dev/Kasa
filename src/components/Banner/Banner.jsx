import PropTypes from "prop-types"
import styles from "./Banner.module.scss"



function Banner({ image, title, alt }) {
    return (
        <>
            <div className={`${styles.banner} ${title ? styles.dark_background : styles.light_background} `}> {/*Ajout de condition sur la présence d'un title ou non afin d'integrer un classe qui gere l'opacité du background'*/}
                <img src={image} alt={alt} ></img>
                <h1>{title}</h1>
            </div >
        </>
    )
}

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    alt: PropTypes.string
}

export default Banner