import styles from "./DropDown.module.scss"
import arrow from "../../assets/icons/arrow_dropDown.svg"
import { useState } from "react"
import PropTypes from "prop-types"

function DropDown({ title, text }) {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className={styles.dropDown}>
            <div className={styles.dropDown_top}>
                <span>{title}</span>
                <img
                    src={arrow}
                    alt="Flèche"
                    className={`${isVisible ? styles.rotated : ""}`}
                    onClick={toggleVisibility}
                />
            </div>
            <div className={`${styles.wrapper} ${isVisible ? styles.is_open : ""}`}>
                <div className={styles.inner}>
                    {Array.isArray(text) ? (
                        <ul>
                            {text.map((item, index) => (
                                <li key={`${title}-${index}`}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{text}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

DropDown.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired
}

export default DropDown