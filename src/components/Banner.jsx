import "../styles/banner.scss";

const Banner = ({ image, text }) => {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" />
      {text && <p className="banner__text">{text}</p>}
    </div>
  );
};

export default Banner;
