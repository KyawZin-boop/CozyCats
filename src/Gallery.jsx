import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import galleryImg1 from './assets/galleryImg1.jpg'
import galleryImg2 from './assets/galleryImg2.jpg'
import galleryImg3 from './assets/galleryImg3.jpg'
import galleryImg4 from './assets/galleryImg4.webp'
import galleryImg5 from './assets/galleryImg5.jpg'
import galleryImg6 from './assets/galleryImg6.jpg'

export default function Gallery() {
    
    return (
        <div className="galleryDiv" id='gallery'>
            <h1>Our Gallery</h1>
            <h4>Our Client Pets As Well As A Gallery With Some Nice Pictures</h4>
            <div className="galleryImg">
            <img src={galleryImg1} alt="Cat Image" className='shadow' />
            <img src={galleryImg2} alt="Cat Image" className='shadow' />
            <img src={galleryImg3} alt="Cat Image" className='shadow' />
            <img src={galleryImg4} alt="Cat Image" className='shadow' />
            <img src={galleryImg5} alt="Cat Image" className='shadow' />
            <img src={galleryImg6} alt="Cat Image" className='shadow' />
            </div>
            <div className="galleryBtn"><button className='shadow'>Watch More <FontAwesomeIcon icon={faAngleRight} className='fs-4 align-middle'/></button></div>
        </div>
    )
}