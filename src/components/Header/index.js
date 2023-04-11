import { Link } from 'react-router-dom'
import './index.css'

const Header = () => (
    <nav className="nav-header">
        <h1 className="nav-title">I7 Tech</h1>
            <ul className="nav-menu">
                <li>
                    <Link className='nav-link' to="/">Home</Link>
                </li>
                <li>
                    <Link className='nav-link' to="/about">About</Link>
                </li>
                <li>
                    <Link className='nav-link' to="/services">Services</Link> 
                </li>
                <li>
                    <Link className='nav-link' to="/contact">Contact</Link>
                </li>
            </ul>
    </nav>
)

export default Header 