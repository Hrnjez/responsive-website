import Card from './Card'
import Img1 from '../img/card-img-1.png'
import Img2 from '../img/card-img-2.png'
const Cards = ( ) => {
    const cards = [
        {
          id:1,  
          title: 'Cycling as a Service', 
          text: 'Enables B2B, B2C and individual customers to use bike leasing and maintenance services as they wish, and allows access to optional mobility modes.',
          img: `${Img1}`,
        },
        {
          id:2, 
          title: 'Cycling as a Service',
          text: 'Allows customers to book and pay for diverse mobility options, and plan intermodal trips.(subway, bus, taxi, scooter…)',
          img: `${Img2}`,
         }
        ]
    return (
        <div className='cards'>
            <div className='desktop-content'>
            <p>Cycling in daily life is no longer a problem. </p> 
            <p>If necessary, combine a bike with metro, train, choose intermodal trips.</p> 
            <br/>
            <p>Rent a car occasionally for the weekend and use a taxi as a solution for social activities or even groceries.</p> 
            <br/>
            <p>Loïva offers choices for everyone, in every situation at any time. </p> 
            <p>Enjoy the combination of Cycling and Mobility as a Service (MaaS).</p> 
            <br/>
            </div>
            <h2>Our Solutions</h2>
            <p>Connecting the cycling and alternative mobility modes</p>
            <br/>
            <div className='cards-list'>
                {cards.map((card) => (
                    <Card key={card.id} title={card.title} text={card.text} img={card.img}/>
                ))}
            </div>
        </div>
    )
}

export default Cards
