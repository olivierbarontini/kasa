import "../styles/banner.scss";

const Banner = ({ image, text, className }) => {
  return (
    <div className={`banner ${className || ''}`.trim()}>
      <img src={image} alt="Bannière" />
      {text && <p className="banner__text">{text}</p>}
    </div>
  );
};

export default Banner;
