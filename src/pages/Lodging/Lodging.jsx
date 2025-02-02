import { useParams } from "react-router-dom"
import styles from "./Lodging.module.scss"
import Tag from "../../components/Tag/Tag"
import Slider from "../../components/Slider/Slider"
import Host from "../../components/Host/Host"
import StarRating from "../../components/StarRating/StarRating"
import DropDown from "../../components/DropDown/DropDown"
import { useFetch } from "../../hooks/useFetch"
import config from "../../config/config"


function Lodging() {
    const { data: lodgings, loading } = useFetch(config.apiUrl);
    const { id } = useParams()

    if (loading) return <div>En cours de chargement...</div>


    const lodging = lodgings.find(item => item.id === id)

    return (
        <div className={styles.lodging_card}>
            <Slider images={lodging.pictures} />
            <div className={styles.info}>
                <div className={styles.info_text}>
                    <h2>{lodging.title}</h2>
                    <p> {lodging.location} </p>
                    <div className={styles.tags}>{lodging.tags.map((tag) => <Tag tagname={tag} key={`${lodging.id}-${tag}`} />)}</div>
                </div>

                <div className={styles.info_host}>
                    <Host picture={lodging.host.picture} name={lodging.host.name} />
                    <StarRating rating={lodging.rating} />
                </div>
            </div>
            <div className={styles.dropDown}>
                <DropDown text={lodging.description} title="Description" />
                <DropDown text={lodging.equipments} title="Équipement" />
            </div>
        </div>
    )
}

export default Lodging