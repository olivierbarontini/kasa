import { useState } from "react";
import "../styles/collapse.scss";
import arrow from "../assets/icons/arrow_back_ios-24px.png"; // ✔ un seul import

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>

        <img
          src={arrow}
          className={open ? "collapse__arrow collapse__arrow--open" : "collapse__arrow"}
          alt="ouvrir / fermer"
        />
      </div>

      {open && (
        <div className="collapse__content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;

