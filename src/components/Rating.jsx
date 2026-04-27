import starFull from "../assets/icons/star.svg";
import starEmpty from "../assets/icons/star-inactive.svg";
import "../styles/rating.scss";

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((num) =>
        num <= rating ? (
          <img key={num} src={starFull} alt="étoile pleine" />
        ) : (
          <img key={num} src={starEmpty} alt="étoile vide" />
        )
      )}
    </div>
  );
}

export default Rating;

