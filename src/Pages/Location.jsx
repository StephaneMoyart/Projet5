import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../Components/Card";

const Location = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const navigate = useNavigate()

    const getLocationData = () => {
        axios.get(`http://localhost:3000/locations/${id}`)
        .then(r => {
            if (r.data) setData(r.data)
            else navigate('/error')
        })
        .catch(() => navigate('/error'))
    }

    useEffect(() => {
        getLocationData()
    }, [])
    
    return (
        <>
            <Header/>
            <main>
                {data ? <Card location={data}/> : "chargement..."}
            </main>
            <Footer/>
        </>
    );
};

export default Location;