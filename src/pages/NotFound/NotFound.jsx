import { Link } from "react-router-dom"
import styles from "./NotFound.module.scss"

function NotFound() {
    return (
        <div className={styles.notFound}>
            <span>404</span>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className={styles.link_to}> Retourner sur la page d'acceuil </Link>
        </div>
    )
}

export default NotFound;

