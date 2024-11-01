import { useState } from "react"

const Slideshow = ({ imgs }) => {
    const [currentImg, setCurrentImg] = useState(0)
    const nextImg = () => setCurrentImg(currentImg === imgs.length - 1 ? 0 : currentImg + 1)
    const prevImg = () => setCurrentImg(currentImg === 0 ? imgs.length - 1 : currentImg - 1)

    return (

        <div className="slideshow">
            <div className="imgContainer">
                <img src={imgs[currentImg]}/>
                { imgs.length !== 1 &&
                    <>
                        <span onClick={prevImg} className="prevArrow"><img src="../src/assets/arrow.svg" alt="arrow" /></span>    
                        <span onClick={nextImg} className="nextArrow"><img src="../src/assets/arrow.svg" alt="arrow" /></span>
                        <span className="counter">{currentImg + 1}/{imgs.length}</span>
                    </>
                }
            </div>
            
        </div>
    )
}

export default Slideshow