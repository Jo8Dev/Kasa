import { useState } from "react"
import styles from "./Slider.module.scss"
import arrowBack from "../../assets/icons/arrow_back.png"
import arrowForward from "../../assets/icons/arrow_forward.png"

function Slider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={styles.sliderContainer}>
            <img className={styles.arrowLeft} onClick={prev} src={arrowBack} />
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className={styles.image} />
            <img className={styles.arrowRight} onClick={next} src={arrowForward} />
        </div>
    );
}

export default Slider