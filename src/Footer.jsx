import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    
    return (
        <div className="footerDiv" id='footer'>
            <div className='footer'>
            <div className='socailLogo'>
                <div className='socailItems'>
                <img src="/src/assets/logo.png" alt="LOGO" />
                <div className='contactIcons'>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                </div>
            </div>
            <div className="footerLinks">
                <div className="pagesLink">
                <h2>Pages</h2>
                <a href="#">About Us</a>
                <a href="#">Our Projects</a>
                <a href="#">Our Team</a>
                <a href="#">Contact Us</a>
                <a href="#">Services</a>
                </div>
                <div className="companyLinks">
                <h2>Company</h2>
                <a href="#">T.O.S</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Careers</a>
                <a href="#">FAQ</a>
                </div>
                <div className="contact">
                <h2>Contact Us</h2>
                <p>55 East Birchwood Ave.Brooklyn, New York 11201</p>
                <p>contact@interno.companions (123) 456-7890</p>
                </div>
            </div>
            </div>
        </div>
    )
}