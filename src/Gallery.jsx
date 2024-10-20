import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function Gallery() {
    
    return (
        <div className="galleryDiv" id='gallery'>
            <h1>Our Gallery</h1>
            <h4>Our Client Pets As Well As A Gallery With Some Nice Pictures</h4>
            <div className="galleryImg">
            <img src="/assets/galleryImg1.jpg" alt="Cat Image" className='shadow' />
            <img src="/assets/galleryImg2.jpg" alt="Cat Image" className='shadow' />
            <img src="/assets/galleryImg3.jpg" alt="Cat Image" className='shadow' />
            <img src="/assets/galleryImg4.webp" alt="Cat Image" className='shadow' />
            <img src="/assets/galleryImg5.jpg" alt="Cat Image" className='shadow' />
            <img src="/assets/galleryImg6.jpg" alt="Cat Image" className='shadow' />
            </div>
            <div className="galleryBtn"><button className='shadow'>Watch More <FontAwesomeIcon icon={faAngleRight} className='fs-4 align-middle'/></button></div>
        </div>
    )
}