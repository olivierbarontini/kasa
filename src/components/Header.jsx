const Header = () => {
    return (
        <header className="header">
            <img src="/logo-kasa.png" alt="Kasa" className="header__logo" />
            <nav className="header__nav">
                <a href="/">Accueil</a>
                <a href="/about">À propos</a>
            </nav>
        </header>
    );
};

export default Header;

