import { useState } from "react";
import arrowLeft from "../assets/icons/arrow_back_ios-24px.png";
import arrowRight from "../assets/icons/arrow_forward_ios-24px.png";
import "../styles/carousel.scss";

const Carousel = ({ pictures }) => {
  // État pour suivre l’index de l’image affichée
  const [index, setIndex] = useState(0);

  // Affiche l’image précédente (boucle vers la dernière si on est à la première)
  const prev = () => {
    setIndex((index - 1 + pictures.length) % pictures.length);
  };

  // Affiche l’image suivante (boucle vers la première si on est à la dernière)
  const next = () => {
    setIndex((index + 1) % pictures.length);
  };

  return (
    <div className="carousel">
      {/* Image principale */}
      <img
        src={pictures[index]}
        alt="Photo du logement"
        className="carousel__image"
      />

      {/* Si une seule image : pas de flèches, pas de compteur */}
      {pictures.length > 1 && (
        <>
          {/* Flèche gauche */}
          <img
            src={arrowLeft}
            alt="Image précédente"
            className="carousel__arrow carousel__arrow--left"
            onClick={prev}
          />

          {/* Flèche droite */}
          <img
            src={arrowRight}
            alt="Image suivante"
            className="carousel__arrow carousel__arrow--right"
            onClick={next}
          />

          {/* Compteur : ex. 2/5 */}
          <p className="carousel__counter">
            {index + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  );
};

export default Carousel;
