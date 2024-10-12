import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner  from "../Components/Banner";
import CardsDisplayer from "../Components/CardsDisplayer";

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <Banner img="../src/assets/bannerimg.jpg" alt="image d'un bord de mer rocheux" title="Chez vous, partout et ailleurs"/>
                <CardsDisplayer/>
            </main>
            <Footer/>
        </>
    );
};

export default Home;