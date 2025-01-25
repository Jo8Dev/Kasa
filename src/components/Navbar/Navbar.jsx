import { Link } from "react-router-dom"
import styles from "./Navbar.module.scss"

function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/" className={styles.link_to}>Accueil</Link></li>
                <li><Link to="/about" className={styles.link_to}>À propos</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar