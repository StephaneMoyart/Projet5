const Banner = ({ img, alt, title, className }) => {
    return (
        <div className="banner">
            <img src={img} alt={alt} className={className}/>
            <h1>{title}</h1>
        </div>
    )
}

export default Banner