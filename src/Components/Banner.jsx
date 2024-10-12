const Banner = ({img, alt, title}) => {
    return (
        <div className="banner">
            <img src={img} alt={alt}/>
            <h1>{title}</h1>
        </div>
    );
};

export default Banner;