import Logements from "../data/logements.json";
import Banner from "../components/Banner";
import Card from "../components/Card";
import bannerImg from "../assets/images/banner.png";

const Home = () => {
    return (
        <div className="home">
            <Banner image={bannerImg} text="Chez vous, partout et ailleurs" />
            <div className="cards-container">
                {Logements.map((logement) => (
                    <Card
                        key={logement.id}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
