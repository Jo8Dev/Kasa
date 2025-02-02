import Banner from "../../components/Banner/Banner"
import Bg from "../../assets/images/Montain-background-2.jpg"
import DropDown from "../../components/DropDown/DropDown"
import styles from "./About.module.scss"

function About() {
    return (
        <div className={styles.about_container}>
            <Banner image={Bg} alt={"Panorama sur des montagnes"} />
            <div className={styles.dropDowns}>
                < DropDown title="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
                < DropDown title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                < DropDown title="Service" text="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." />
                < DropDown title="Sécurité" text="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." />
            </div>
        </div>
    )
}

export default About