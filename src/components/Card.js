const Card = ({img, title, text}) => {
    return (
        <div className='card'>
            <div className='img-container'>
                <img src={img} alt="Card" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <div><a className='btn' href="/">More</a></div>
        </div>
    )
}

export default Card
