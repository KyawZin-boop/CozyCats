import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import homeImg1 from './assets/homeCat.jpg'

export default function Home() {

    return (
        <div className='homeContainer' id='home'>
        <div className='homeContent'>
          <img src={homeImg1} alt="Cat" />
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
    )
}