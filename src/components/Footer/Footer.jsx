import styles from "./Footer.module.scss"
import logo from "../../assets/icons/Logo-white.svg"

function Footer() {
    return <footer>
        <img src={logo} alt="logo Kasa" />
        <p>© 2025 - Kasa. All rights reserved</p>
    </footer>
}

export default Footer
