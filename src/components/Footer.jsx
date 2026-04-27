import logoFooter from "../assets/icons/logo-footer.svg";
import "../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Kasa" className="footer__logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

