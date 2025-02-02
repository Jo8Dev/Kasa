import { useState } from "react"
import styles from "./Slider.module.scss"
import arrowBack from "../../assets/icons/arrow_back.png"
import arrowForward from "../../assets/icons/arrow_forward.png"
import PropTypes from "prop-types"

function Slider({ images }) {

    const [currentIndex, setCurrentIndex] = useState(0)

    //Fonction pour aller à l'image suivante
    const next = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    //Fonction pour aller à l'image précedente
    const prev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    //Condition pour gérer l'affichage des fleches et de la numerotation en fonction du nombre d'image
    if (images.length > 1) {
        return (
            <div className={styles.sliderContainer}>
                <img src={arrowBack} className={styles.arrowLeft} onClick={prev} />
                <span className={styles.numerotation}>{currentIndex + 1}/{images.length}</span>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className={styles.image} />
                <img src={arrowForward} className={styles.arrowRight} onClick={next} />
            </div>
        );
    } else {
        return (
            <div className={styles.sliderContainer}>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className={styles.image} />
            </div>
        )
    }
}

Slider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string)
}

export default Slider