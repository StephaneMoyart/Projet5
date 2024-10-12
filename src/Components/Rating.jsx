const Rating = ({ rating }) => {

    const ratingValue = parseInt(rating)
    const displayRating = () => {
        const stars = []
        for (let i = 0; i < 5; i++) {
            if (i < ratingValue) stars.push(<img src="../src/assets/redStar.svg" key={Math.random().toString(36).slice(2, 22)}/>)
            else stars.push(<img src="../src/assets/greyStar.svg" key={Math.random().toString(36).slice(2, 22)}/>)
        }
        return stars
    }

    return (
        <div className="stars">
        {displayRating()}
        </div>
    );
};

export default Rating;