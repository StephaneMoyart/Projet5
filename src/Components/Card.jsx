import Collapse from "./Collapse";
import Rating from "./Rating";
import Slideshow from "./Slideshow";

const Card = ({ location }) => {
    
    return (
        <div className="card">
            <Slideshow imgs={location.pictures}/>

            <div className="presentation">
                <div className="presentationLeft">
                    <h1>{location.title}</h1>
                    <p>{location.location}</p>
                    <div className="tags">
                        {location.tags.map(tag => (<div className="tag" key={Math.random().toString(36).slice(2, 22)}>{tag}</div>))}
                    </div>
                </div>
                <div className="presentationRight">
                    <div className="owner">
                        <p>{location.host.name}</p>
                        <img src={location.host.picture} alt="photo de profil du propriétaire"/>
                    </div>
                    <Rating rating={location.rating}/>
                </div>
            </div>

            <div className="presentationBottom"> 
                <Collapse title={"Description"}>{location.description}</Collapse>
                <Collapse title={"Equipements"}><ul>{location.equipments.map(eq=> <li key={Math.random().toString(36).slice(2, 22)}>{eq}</li>)}</ul></Collapse>
            </div>
        </div>
    )
}

export default Card