import React from 'react'
import exclusive_img from '../Assets/exclusive_image.png'
import './Offers.css'

export default function Offers() {
  return (
    <div>
        <div className=' offers container my-lg-2 my-2'>
            <div className='row align-items-center'>
                <div className='col-6'>
                    <div className='p-lg-5 py-4 fw-bold'>
                        <h1>Exclusive</h1>
                        <h1>Offers for you</h1>
                        <p className='fs-lg-5 '>ONLY ON BEST SELLERS PRODUCT</p>
                        <button className='btn btn-danger'>Check now</button>
                    </div>
                </div>
                <div className='col-6 d-flex justify-content-end p-lg-5'>
                       <img src={exclusive_img} alt='' className='col-9 col-lg-6'></img>
                    </div>
            </div>
        </div>      
    </div>
  )
}
