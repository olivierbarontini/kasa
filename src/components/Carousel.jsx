import arrowLeft from "../assets/icons/arrow_back_ios-24px.png";
import arrowRight from "../assets/icons/arrow_forward_ios-24px.png";
import "../styles/carousel.scss";

import { useState } from "react";

const Carousel = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + pictures.length) % pictures.length);
  };

  const next = () => {
    setIndex((index + 1) % pictures.length);
  };

  return (
    <div className="carousel">
      <img
        src={pictures[index]}
        alt="logement"
        className="carousel__image"
      />

      {pictures.length > 1 && (
        <>
          <img
            src={arrowLeft}
            alt="précédent"
            className="carousel__arrow carousel__arrow--left"
            onClick={prev}
          />
          <img
            src={arrowRight}
            alt="suivant"
            className="carousel__arrow carousel__arrow--right"
            onClick={next}
          />

          <p className="carousel__counter">
            {index + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  );
};

export default Carousel;
