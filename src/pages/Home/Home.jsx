import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card"
import Bg from "../../assets/images/Montain-background.jpg"
import styles from "./Home.module.scss"
import location from "../../data/lodging.json"

function Home() {

    return (
        <>
            <Banner image={Bg} title="Chez vous, partout et ailleurs" alt="Falaise au bord de la mer" />
            <div className={styles.card_container}>
                <div className={styles.grid}>
                    {location.map(logement => (
                        <Card
                            title={logement.title}
                            cover={logement.cover}
                            key={logement.id}
                            id={logement.id}
                        />
                    ))}
                </div>
            </div>
        </>)

}

export default Home;
