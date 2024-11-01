import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const CardsDisplayer = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/locations")
        .then(r => setData(r.data))
    }, [])
    
    return (
        <div className="cardsDisplayer">
            {data.map((location) => 
                <NavLink to={`/location/${location.id}`} className="cardPreview" key={location.id}>
                <img src={location.cover} alt="image du logement"/>
                <h3>{location.title}</h3>
                </NavLink>
            )}
        </div>
    )
}

export default CardsDisplayer