import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <Header/>
            <main className="errorContainer">
                <h1>404</h1>
                <p>Oups ! La page que vous demandez n'existe pas.</p>
                <Link to="/" className={'toRedirect'}>Retourner sur la page d'accueil</Link>
            </main>
            <Footer/>
        </>
    );
};

export default Error