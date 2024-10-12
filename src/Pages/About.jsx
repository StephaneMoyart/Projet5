import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import { useEffect, useState } from "react";
import axios from "axios";
import Collapse from "../Components/Collapse";

const About = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3004/infos")
        .then(r => setData(r.data))
    }, [])

    return (
        <>
            <Header/>
            <main className="aboutMain">
                <Banner img="../src/assets/bannerimg2.jpg" alt="image d'un paysage montagneux"/>
                <div className="collapseContainer">
                    {data.map((info) => <Collapse key={info.id} title={info.title}>{info.content}</Collapse>)}
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default About;