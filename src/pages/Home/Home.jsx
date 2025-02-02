import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card"
import Bg from "../../assets/images/Montain-background.jpg"
import styles from "./Home.module.scss"
import { useFetch } from "../../hooks/useFetch.jsx"
import config from "../../config/config.js"
import NotFound from "../NotFound/NotFound.jsx"

function Home() {
    const { data: lodgings, error, loading } = useFetch(config.apiUrl)

    if (error) return <div>❗Erreur : {error.message}</div>
    if (loading) return <div>En cours de chargement...</div>
    if (!lodgings) return <NotFound />

    return (<>
        <Banner image={Bg} title="Chez vous, partout et ailleurs" alt="Falaise au bord de la mer" />
        <div className={styles.card_container}>
            <div className={styles.grid}>
                {lodgings.map(lodging => (
                    <Card
                        title={lodging.title}
                        cover={lodging.cover}
                        key={lodging.id}
                        id={lodging.id}
                    />
                ))}
            </div>
        </div>
    </>
    )
}


export default Home;
