import Banner from "../components/Banner/Banner"
import Bg from "../assets/images/Montain-background.jpg"

function Home() {

    const text = "Chez vous, partout et ailleurs"

    return (
        <>
            <Banner image={Bg} title={text} alt={"Falaise au bord de la mer"} />
        </>
    )

}

export default Home;
