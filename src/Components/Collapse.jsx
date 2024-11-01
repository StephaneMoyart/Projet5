import { useState } from "react";

const Collapse = ({ title, children }) => {

    const [isDisplayed, setIsDisplayed] = useState(false)

    return (
        <div className={isDisplayed ? "collapse open" : "collapse" }>
            <div className={isDisplayed ? "backgroundFix" : ""}>
                <div className="collapseTitle" onClick={() => setIsDisplayed(prevState => !prevState)}>
                    <h3>{title}</h3>
                    <span className={isDisplayed ? "arrow openArrow" : "arrow"}>
                        <img src="../src/assets/arrow.png" alt="arrow" />
                    </span>
                </div>
            </div>
            <div className={isDisplayed ? "content open" : "content"}>{children}</div>      
        </div>
    );
};

export default Collapse;