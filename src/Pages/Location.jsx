import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../Components/Card";

const Location = () => {
    const { id } = useParams()
    const [location, setLocation] = useState(null)
    const navigate = useNavigate()

    const getLocationData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/locations/${id}`)
            setLocation(response.data)
        } catch { navigate('/error') }
    }

    useEffect(() => { getLocationData() },[])
    
    return (
        <>
            <Header/>
            <main>
                {location ? <Card location={location}/> : "chargement..."}
            </main>
            <Footer/>
        </>
    )
}

export default Location