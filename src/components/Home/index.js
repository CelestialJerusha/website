import web from '../Common/webdev.png'
import Common from '../Common'

const Home = () =>{
    return(
            <Common
            name='Grow with your business with' 
            imgSrc={web} 
            visit="/services" 
            btnname="Get Started" />
    )
}

export default Home