import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Banner from "../Components/Banner"
import Collapse from "../Components/Collapse"
import { useEffect, useState } from "react"
import axios from "axios"

const About = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/infos")
        .then(r => setData(r.data))
    }, [])

    return (
        <>
            <Header/>
            <main className="aboutMain">
                <Banner img="../src/assets/bannerimg2.jpg" alt="image d'un paysage montagneux" className="aboutBanner"/>
                <div className="collapseContainer">
                    {data.map((info) => <Collapse key={info.id} title={info.title}>{info.content}</Collapse>)}
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default About