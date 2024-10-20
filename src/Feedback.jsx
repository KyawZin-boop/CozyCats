import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBone, faAngleRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Feedback() {
    
    return (
        <div className="feedback" id='feedback'>
            <h1>Happy Customers With Us</h1>
            <div className="feedbackCard">
            <div className='card shadow'>
                <div className='card-body'>
                <img src="/assets/feedbackImg1.jpg" className="d-block w-100" alt="..." />
                <p className='name'>Chris & Tom</p>
                <p className='feedbackInfo'>Amazing Products & Delievery On Time</p>
                <div className="price">
                    <div className="iconDiv">
                    <FontAwesomeIcon icon={faBone} style={{ transform: 'rotate(135deg)' }} className='boneIcon'/>
                    <FontAwesomeIcon icon={faBone} style={{ transform: 'rotate(135deg)' }} className='boneIcon'/>
                    <FontAwesomeIcon icon={faBone} style={{ transform: 'rotate(135deg)' }} className='boneIcon'/>
                    <FontAwesomeIcon icon={faBone} style={{ transform: 'rotate(135deg)' }} className='boneIcon'/>
                    <FontAwesomeIcon icon={faBone} style={{ transform: 'rotate(135deg)' }} className='boneIcon'/>
                    </div>
                    <span>5/5</span>
                </div>
                </div>
            </div>
            <div className='card shadow'>
                <div className='card-body'>
                <img src="/assets/feedbackImg2.webp" className="d-block w-100" alt="..." />
                <p className='name'>Selena & Tobby</p>
                <p className='feedbackInfo'>Leave The Overall Shipping Experience</p>
                <div className="price">
                    <div className="iconDiv">
                    <FontAwesomeIcon icon={faBone} style={{ transform: 'rotate(135deg)' }} className='boneIcon'/>
                    <FontAwesomeIcon icon={faBone} style={{ transform: 'rotate(135deg)' }} className='boneIcon'/>
                    <FontAwesomeIcon icon={faBone} style={{ transform: 'rotate(135deg)' }} className='boneIcon'/>
                    <FontAwesomeIcon icon={faBone} style={{ transform: 'rotate(135deg)' }} className='boneIcon'/>
                    <FontAwesomeIcon icon={faBone} style={{ transform: 'rotate(135deg)' }} className='boneIcon text-white'/>
                    </div>
                    <span>4/5</span>
                </div>
                </div>
            </div>
            <div className='card shadow'>
                <div className='card-body'>
                <img src="/assets/feedbackImg3.jpg" className="d-block w-100" alt="..." />
                <p className='name'>Jane & Katy</p>
                <p className='feedbackInfo'>The Great Service</p>
                <div className="price">
                    <div className="iconDiv">
                    <FontAwesomeIcon icon={faBone} style={{ transform: 'rotate(135deg)' }} className='boneIcon'/>
                    <FontAwesomeIcon icon={faBone} style={{ transform: 'rotate(135deg)' }} className='boneIcon'/>
                    <FontAwesomeIcon icon={faBone} style={{ transform: 'rotate(135deg)' }} className='boneIcon'/>
                    <FontAwesomeIcon icon={faBone} style={{ transform: 'rotate(135deg)' }} className='boneIcon text-white'/>
                    <FontAwesomeIcon icon={faBone} style={{ transform: 'rotate(135deg)' }} className='boneIcon text-white'/>
                    </div>
                    <span>3/5</span>
                </div>
                </div>
            </div>
            </div>
            <button className='viewFeedbackBtn shadow'>
            View All Feedback <FontAwesomeIcon icon={faAngleRight} className='fs-4 ms-1 align-middle' />
            </button>
            <div className='emailDiv'>
            <div className="emailCard shadow">
                <h1>Join Us With Affiliate Program</h1>
                <div className='emailSender'>
                <FontAwesomeIcon icon={faEnvelope} className='emailIcon'/>
                <input type="email" placeholder="Type Your Email Address Here" />
                <button className='shadow'>Subscribe Now</button>
                </div>
            </div>
            </div>
        </div>
    )
}