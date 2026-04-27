import "../styles/banner.scss";

const Banner = ({ image, text, className }) => {
    return (
        <div className={`banner ${className || ''}`}>
            <img src={image} alt="bannière" />
            {text && <p className="banner__text">{text}</p>}
        </div>
    );
};

export default Banner;
