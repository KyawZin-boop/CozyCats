import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonDotsFromLine, faHandHoldingMedical, faPersonChalkboard, faHouseChimneyUser, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import serviceImg1 from "./assets/serviceDivImg1.jpg"
import serviceImg2 from "./assets/serviceDivImg2.jpg"
import serviceImg3 from "./assets/serviceDivImg3.jpg"

export default function Service() {
    
    return (
        <div className='serviceDiv' id='service'>
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
            <img src={serviceImg1} alt="" className='helpImage1'/>
            <img src={serviceImg2} alt="" className='helpImage2'/>
            <img src={serviceImg3} alt="" className='helpImage3'/>
          </div>
        </div>
      </div>
    )
}