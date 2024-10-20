import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from './assets/logo.png'

export default function Navbar() {
    return( <nav className='navbar navbar-expand-lg'>
                <div className='logoDiv'><img src={logo} alt="" /></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navLinks collapse navbar-collapse" id="navbarTogglerDemo02">
                <a href="#home">Home</a>
                <a href="#adoption">Adoption</a>
                <a href="#service">Services</a>
                <a href="#gallery">Gallery</a>
                <a href="#product">Products</a>
                <a href="#feedback">FAQ</a>
                <div className='search ms-3'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='fs-4'/>
                </div>
                <div className='mobileSearch'>
                    <input type="text" />
                    <button>Search</button>
                </div>
                </div>
            </nav>
    )
}