import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function Adoption() {
    
    return (
        <div className='adoptionContainer' id='adoption'>
        <h1>Adoption</h1>
        <h2>Adopt the cute pets that have waited for you too long</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ducimus vel veniam sapiente adipisci nam, sunt explicabo fugit 
          distinctio perspiciatis totam laboriosam sit est nesciunt 
          a dolor cum voluptate optio eligendi!</p>
        <div id="carouselExampleAutoplaying" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='carouselItems'>
                <button className="carousel-control-prev me-5 position-relative" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <div className='card shadow'>
                  <div className='card-body'>
                    <img src="/assets/munchkin-kitten.jpg" className="d-block w-100" alt="..." />
                    <p className='catName'>Munchkin</p>
                    <p className='catAge'>One Month Old</p>
                    <button className='adoptBtn shadow-sm'>Adopt <FontAwesomeIcon icon={faAngleRight} className='fs-4 align-middle'/></button>
                  </div>
                </div>
                <div className='card shadow'>
                  <div className='card-body'>
                    <img src="/assets/persian.jpg" className="d-block w-100" alt="..." />
                    <p className='catName'>Persian</p>
                    <p className='catAge'>Five Month Old</p>
                    <button className='adoptBtn shadow-sm'>Adopt <FontAwesomeIcon icon={faAngleRight} className='fs-4 align-middle'/></button>
                  </div>
                </div>
                <div className='card shadow'>
                  <div className='card-body'>
                    <img src="/assets/Ragdoll.jpg" className="d-block w-100" alt="..." />
                    <p className='catName'>Ragdoll</p>
                    <p className='catAge'>Six Month Old</p>
                    <button className='adoptBtn shadow-sm'>Adopt <FontAwesomeIcon icon={faAngleRight} className='fs-4 align-middle'/></button>
                  </div>
                </div>
                <button className="carousel-control-next ms-5 position-relative" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <div className='carouselItems'>
                  <button className="carousel-control-prev me-5 position-relative" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <div className='card shadow'>
                    <div className='card-body'>
                      <img src="/assets/SiberianCat.jfif" className="d-block w-100" alt="..." />
                      <p className='catName'>Siberian</p>
                      <p className='catAge'>Six Month Old</p>
                      <button className='adoptBtn shadow-sm'>Adopt <FontAwesomeIcon icon={faAngleRight} className='fs-4 align-middle'/></button>
                    </div>
                  </div>
                  <div className='card shadow'>
                    <div className='card-body'>
                      <img src="/assets/britishLonghairCat.jfif" className="d-block w-100" alt="..." />
                      <p className='catName'>British Longhair</p>
                      <p className='catAge'>Five Month Old</p>
                      <button className='adoptBtn shadow-sm'>Adopt <FontAwesomeIcon icon={faAngleRight} className='fs-4 align-middle'/></button>
                    </div>
                  </div>
                  <div className='card shadow'>
                    <div className='card-body'>
                      <img src="/assets/northweiganCat.jfif" className="d-block w-100" alt="..." />
                      <p className='catName'>North Weigan</p>
                      <p className='catAge'>Nine Month Old</p>
                      <button className='adoptBtn shadow-sm'>Adopt <FontAwesomeIcon icon={faAngleRight} className='fs-4 align-middle'/></button>
                    </div>
                  </div>
                  <button className="carousel-control-next ms-5 position-relative" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
}