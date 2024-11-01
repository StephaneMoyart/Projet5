import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Banner  from "../Components/Banner"

import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import axios from "axios"

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/locations")
        .then(r => setData(r.data))
    }, [])

    return (
        <>
            <Header/>
            <main>
                <Banner img="../src/assets/bannerimg.jpg" alt="image d'un bord de mer rocheux" title="Chez vous, partout et ailleurs"/>
                <div className="cardsDisplayer">
                    {data.map((location) => 
                        <NavLink to={`/location/${location.id}`} className="cardPreview" key={location.id}>
                        <img src={location.cover} alt="image du logement"/>
                        <h3>{location.title}</h3>
                        </NavLink>
                    )}
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Home