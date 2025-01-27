import { useParams } from "react-router-dom"
import location from "../../data/lodging.json"
import styles from "./Lodging.module.scss"
import Tag from "../../components/Tag/Tag"
import Slider from "../../components/Slider/Slider"

function Lodging() {
    const { id } = useParams()

    const logements = location.find(item => item.id === id)

    return (
        <div className={styles.lodging_card}>
            <Slider images={logements.pictures} />
            <h2>{logements.title}</h2>
            <p> {logements.location} </p>
            <div className={styles.tags}>{logements.tags.map((tag) => <Tag tagname={tag} key={`${logements.id}-${tag}`} />)}</div>
        </div>
    )
}

export default Lodging