import web from './webdev1.png'
import Common from '../Common'

const About = () =>{
    return(
        <Common 
         name='Welcome to About page' 
         imgSrc={web} 
         visit="/contact" 
         btnname="Contact Now"
         />
    )
}

export default About