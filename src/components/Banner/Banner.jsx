import styles from "./Banner.module.scss"



function Banner({ image, title, alt }) {
    return (
        <div className="container">
            <div className={styles.banner}>
                <img src={image} alt={alt}></img>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default Banner