import { useParams, Navigate } from "react-router-dom";
import Logements from "../data/logements.json";

import Carousel from "../components/Carousel";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import Host from "../components/Host";
import Collapse from "../components/Collapse";
import "../styles/logement.scss";

function Logement() {
  const { id } = useParams();
  const logement = Logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="logement">
      <Carousel pictures={logement.pictures} />

      <div className="logement__header">
        <div className="logement__infos">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>

        <div className="logement__host-rating">
          <Host host={logement.host} />
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className="logement__collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </div>
  );
}

export default Logement;

