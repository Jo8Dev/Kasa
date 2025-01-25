import styles from "./Header.module.scss"
import logo from "../../assets/icons/Logo.svg"
import Navbar from "../Navbar/Navbar";


function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo kasa" />
            <Navbar />
        </header>
    );
}

export default Header;
