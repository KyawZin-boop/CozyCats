import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAngleRight, faAnglesRight  } from "@fortawesome/free-solid-svg-icons";
import { faPersonDotsFromLine, faHandHoldingMedical, faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimneyUser, faEnvelope, faBone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Navbar from './Navbar';

function App() {

  return (
    <>
      <Navbar />

      <div className='homeContainer' id='home'>
        <div className='homeContent'>
          <img src="/src/assets/homeCat.jpg" alt="Cat" />
          <h1>Your Best Companions</h1>
          <p>Cats, contrary to popular belief, are not solitary creatures. They are 
            capable of forming strong emotional bonds with their human 
            companions, which can significantly enhance their quality of life. 
            This bond is not merely a one-way street; the cat-human bond 
            offers mutual benefits.
          </p>
          <button className='shadow-sm'>Explore More <FontAwesomeIcon icon={faAngleRight} className='fs-2 align-middle'/></button> 
        </div>
      </div>

      <div className='adoptionContainer'>
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
                    <img src="/src/assets/munchkin-kitten.jpg" className="d-block w-100" alt="..." />
                    <p className='catName'>Munchkin</p>
                    <p className='catAge'>One Month Old</p>
                    <button className='adoptBtn shadow-sm'>Adopt <FontAwesomeIcon icon={faAngleRight} className='fs-4 align-middle'/></button>
                  </div>
                </div>
                <div className='card shadow'>
                  <div className='card-body'>
                    <img src="/src/assets/persian.jpg" className="d-block w-100" alt="..." />
                    <p className='catName'>Persian</p>
                    <p className='catAge'>Five Month Old</p>
                    <button className='adoptBtn shadow-sm'>Adopt <FontAwesomeIcon icon={faAngleRight} className='fs-4 align-middle'/></button>
                  </div>
                </div>
                <div className='card shadow'>
                  <div className='card-body'>
                    <img src="/src/assets/Ragdoll.jpg" className="d-block w-100" alt="..." />
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
          </div>
        </div>
      </div>

      <div className='serviceDiv'>
        <h1>Our Services</h1>
        <h4>All Cats Care Services</h4>
        <div className="cardContainer">
          <div className="card shadow">
            <div className="card-body">
              <div><FontAwesomeIcon icon={faPersonDotsFromLine} className='icon'/></div>
              <p>GROMMING</p>
            </div>
          </div>
          <div className="card shadow">
            <div className="card-body">
              <div><FontAwesomeIcon icon={faHandHoldingMedical} className='icon'/></div>
              <p>HEALTHCARE</p>
            </div>
          </div>
          <div className="card shadow">
            <div className="card-body">
              <div><FontAwesomeIcon icon={faPersonChalkboard} className='icon'/></div>
              <p>TRANING</p>
            </div>
          </div>
          <div className="card shadow">
            <div className="card-body">
              <div><FontAwesomeIcon icon={faHouseChimneyUser} className='icon'/></div>
              <p>DAYCARE</p>
            </div>
          </div>
        </div>
        <div className="helpYou">
          <div className='helpText'>
            <h3 className='text-center'>We Can Help You</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Expedita excepturi temporibus neque omnis tenetur molestiae eius, 
              quam exercitationem, asperiores iusto rem, perspiciatis architecto 
              natus. Eaque quo sit quisquam blanditiis?
            </p>
            <button className='shadow-sm'>Explore More <FontAwesomeIcon icon={faAngleRight} className='fs-4 align-middle'/></button>
          </div>
          <div className='helpImages'>
            <img src="/src/assets/serviceDivImg1.jpg" alt="" className='helpImage1'/>
            <img src="/src/assets/serviceDivImg2.jpg" alt="" className='helpImage2'/>
            <img src="/src/assets/serviceDivImg3.jpg" alt="" className='helpImage3'/>
          </div>
        </div>
      </div>

      <div className="galleryDiv">
        <h1>Our Gallery</h1>
        <h4>Our Client Pets As Well As A Gallery With Some Nice Pictures</h4>
        <div className="galleryImg">
          <img src="/src/assets/galleryImg1.jpg" alt="Cat Image" className='shadow' />
          <img src="/src/assets/galleryImg2.jpg" alt="Cat Image" className='shadow' />
          <img src="/src/assets/galleryImg3.jpg" alt="Cat Image" className='shadow' />
          <img src="/src/assets/galleryImg4.webp" alt="Cat Image" className='shadow' />
          <img src="/src/assets/galleryImg5.jpg" alt="Cat Image" className='shadow' />
          <img src="/src/assets/galleryImg6.jpg" alt="Cat Image" className='shadow' />
        </div>
        <div className="galleryBtn"><button className='shadow'>Watch More <FontAwesomeIcon icon={faAngleRight} className='fs-4 align-middle'/></button></div>
      </div>

      <div className="productDiv">
        <h1>Pets Products & Nutrients</h1>
        <div className="productCard">
          <div className='card shadow'>
            <div className='card-body'>
              <img src="/src/assets/productImg1.webp" className="d-block w-100" alt="..." />
              <p className='catName'>Dry Food For Adult Cats</p>
              <div className="price">
                <span>$250</span>
                <button className='butBtn shadow-sm'>Buy <FontAwesomeIcon icon={faAngleRight} className='fs-5 align-middle'/></button>
              </div>
            </div>
          </div>
          <div className='card shadow'>
            <div className='card-body'>
              <img src="/src/assets/productImg2.jpg" className="d-block w-100" alt="..." />
              <p className='catName'>Cat Shampoo Perfect</p>
              <div className="price">
                <span>$200</span>
                <button className='butBtn shadow-sm'>Buy <FontAwesomeIcon icon={faAngleRight} className='fs-5 align-middle'/></button>
              </div>
            </div>
          </div>
          <div className='card shadow'>
            <div className='card-body'>
              <img src="/src/assets/productImg3.jpg" className="d-block w-100" alt="..." />
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

      <div className="feedback">
        <h1>Happy Customers With Us</h1>
        <div className="feedbackCard">
          <div className='card shadow'>
            <div className='card-body'>
              <img src="/src/assets/feedbackImg1.jpg" className="d-block w-100" alt="..." />
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
              <img src="/src/assets/feedbackImg2.webp" className="d-block w-100" alt="..." />
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
              <img src="/src/assets/feedbackImg3.jpg" className="d-block w-100" alt="..." />
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

      <div className="footerDiv">
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
    </>
  )
}

export default App
