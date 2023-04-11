import './index.css'
import Sdata from '../Sdata'
import Card from '../Card'

const Services = () =>{
    return(
        <div className='services_cont'>
        <h1 className='services_title'>Our Services</h1>
        <ul className='card_details'>
            {
            Sdata.map((val, ind) => {
                return <Card key={ind}
                imgSrc={val.imgSrc}
                title={val.title}
                />
            })
        }
        </ul>
        </div>
    )
}

export default Services