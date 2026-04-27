import logo from "../assets/icons/LOGO.svg";
import "../styles/header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Kasa" className="header__logo" />
            <nav className="header__nav">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Accueil
                </NavLink>

                <NavLink 
                    to="/about" 
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    À propos
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
