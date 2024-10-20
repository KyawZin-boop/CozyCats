import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons'

export default function Product() {
    
    return (
        <div className="productDiv" id='product'>
            <h1>Pets Products & Nutrients</h1>
            <div className="productCard">
            <div className='card shadow'>
                <div className='card-body'>
                <img src="/assets/productImg1.webp" className="d-block w-100" alt="..." />
                <p className='catName'>Dry Food For Adult Cats</p>
                <div className="price">
                    <span>$250</span>
                    <button className='butBtn shadow-sm'>Buy <FontAwesomeIcon icon={faAngleRight} className='fs-5 align-middle'/></button>
                </div>
                </div>
            </div>
            <div className='card shadow'>
                <div className='card-body'>
                <img src="/assets/productImg2.jpg" className="d-block w-100" alt="..." />
                <p className='catName'>Cat Shampoo Perfect</p>
                <div className="price">
                    <span>$200</span>
                    <button className='butBtn shadow-sm'>Buy <FontAwesomeIcon icon={faAngleRight} className='fs-5 align-middle'/></button>
                </div>
                </div>
            </div>
            <div className='card shadow'>
                <div className='card-body'>
                <img src="/assets/productImg3.jpg" className="d-block w-100" alt="..." />
                <p className='catName'>Cat House</p>
                <div className="price">
                    <span>$1050</span>
                    <button className='butBtn shadow-sm'>Buy <FontAwesomeIcon icon={faAngleRight} className='fs-5 align-middle'/></button>
                </div>
                </div>
            </div>
            </div>
            <button className='seeAllBtn'>See All Product<FontAwesomeIcon icon={faAnglesRight} className='fs-4 ms-1 align-middle' /></button>
        </div>
    )
}