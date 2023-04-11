import './index.css'

const Card = (props) =>{
    return(
        <div>
            <div className='sub_container'>
                <img className='image_element' src={props.imgSrc} alt={props.imgSrc} /> 
                <h3 className='card_title'>{props.title}</h3>
                <p className='text_content'>Some quick example text to build on the card title and make up the bulk of the card content</p>
                <button className='services_btn'>Go Somewhere</button>
            </div>
        </div>
    )
}

export default Card