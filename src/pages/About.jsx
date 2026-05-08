import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import bannerImg from "../assets/images/about.png";
import aboutData from "../data/about.json";
import "../styles/about.scss";

function About() {
  return (
    <>
      <Banner image={bannerImg} className="banner--about" />

      <div className="about">
        <div className="about__collapses">
          {aboutData.map((section, index) => (
            <Collapse
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default About;

