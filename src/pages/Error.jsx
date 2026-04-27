import { Link } from "react-router-dom";
import "../styles/error.scss";

function Error() {
  return (
    <div className="page-container">
      <div className="error">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </div>
  );
}

export default Error;

