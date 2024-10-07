import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <img src="../src/assets/Logo.svg" alt="Logo du site kasa"/>
            <nav>
                <NavLink to="/" className={'navElem'}>Accueil</NavLink>
                <NavLink to="/About" className={'navElem'}>A propos</NavLink>
            </nav>
        </header>
        
    );
};

export default Header;