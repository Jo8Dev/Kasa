import { useParams } from "react-router-dom"
import lodgings from "../../data/lodging.json"
import styles from "./Lodging.module.scss"
import Tag from "../../components/Tag/Tag"
import Slider from "../../components/Slider/Slider"

function Lodging() {
    const { id } = useParams()

    const lodging = lodgings.find(item => item.id === id)

    return (
        <div className={styles.lodging_card}>
            <Slider images={lodging.pictures} />
            <h2>{lodging.title}</h2>
            <p> {lodging.location} </p>
            <div className={styles.tags}>{lodging.tags.map((tag) => <Tag tagname={tag} key={`${lodging.id}-${tag}`} />)}</div>
        </div>
    )
}

export default Lodging