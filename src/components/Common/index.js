import './index.css'
import { Link } from 'react-router-dom'

const Common = (props) =>{
    return(
        <div className="main_container">
            <div className="cont1">
                <h1>{props.name} <br/><strong className="brand_name">I7 Tech</strong></h1>
                <p>We are the team of talented developers making websites</p>
                <Link className='nav-btn-link' to={props.visit}><button className='btn'>{props.btnname}</button></Link>
            </div>
            <div className="cont2">
                <img src={props.imgSrc} alt="tech" />
            </div>
        </div>
    )
}

export default Common