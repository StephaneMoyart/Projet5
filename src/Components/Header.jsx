import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src="../src/assets/Logo.svg" alt="Logo du site kasa"/>
            <nav>
                <NavLink to="/" className={({isActive}) => `navElem ${isActive ? 'active' : ''}`}>Accueil</NavLink>
                <NavLink to="/About" className={({isActive}) => `navElem ${isActive ? 'active' : ''}`}>A propos</NavLink>
            </nav>
        </header>
        
    );
};

export default Header;