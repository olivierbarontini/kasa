import { Link } from "react-router-dom";
import "../styles/card.scss";

const Card = ({ id, title, cover }) => {
    return (
        <Link to={`/logement/${id}`} className="card">
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </Link>
    );
};

export default Card;
