import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import hero_img from '../Assets/hero_image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
  return (
    <div>
      <div className=' hero container-fluid'>
        <div className='container'>
            <div className='row align-items-center' >
                <div className='col-6'>
                    <h4>NEW ARRIVALS ONLY</h4>
                    <div style={{display:'flex',alignItems: 'center'}}>
                        <h1>new</h1>
                        <img src={hand_icon} alt='hand-icon' className='handIcon'></img>
                    </div>
                    <h1>Collections</h1>
                    <h1>for everyone</h1>
                    <button type="button" class="btn btn-danger mt-lg-4 mt-2">Latest Collection <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <div className='col-6 d-flex justify-content-end'>
                <img src={hero_img} alt='' className='heroimg col-lg-8 col-12 '></img>
                </div>
                {/* <div className='col-6 '>
                    <div className=' d-flex justify-content-end'>
                    <img src={hero_img} alt='' className='heroimg col-lg-8 col-5 '></img>
                    </div>
                </div> */}
            </div>
        </div>
      </div>
    </div>
  )
}
