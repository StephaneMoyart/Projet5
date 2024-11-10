const Banner = ({img, alt, title, style}) => {
    return (
        <div className="banner">
            <img src={img} alt={alt} style={style}/>
            <h1>{title}</h1>
        </div>
    )
}

export default Banner