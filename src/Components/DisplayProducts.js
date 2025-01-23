import React from 'react'
import star_icon from '../Assets/star_icon.png'

export default function DisplayProducts() {
  return (
    <div>
              <div className='row my-lg-4'>
        <div className='col-6 d-flex row'>
          <div className='d-flex flex-column col-2 px-0 align-items-center justify-content-center m-lg-2'>
            <img src={product.image} alt='' className='img-fluid col-12 m-lg-1'></img>
          <img src={product.image} alt='' className='img-fluid col-12 m-lg-1'></img>
          <img src={product.image} alt='' className='img-fluid col-12 m-lg-1'></img>
          <img src={product.image} alt='' className='img-fluid col-12 m-lg-1'></img>

          </div>
          <div className='d-flex col-9 px-0 align-items-center justify-content-start'>
          <img src={product.image} alt='' className='big-img col-11  '></img>
          </div>
        </div>

        <div className='col-6'>
          <h2 className='mt-lg-2'>{product.name}</h2>
          <div>
            <img src={star_icon} alt='' className='img-fluid'></img>
            <img src={star_icon} alt='' className='img-fluid'></img>
            <img src={star_icon} alt='' className='img-fluid'></img>
            <img src={star_icon} alt='' className='img-fluid'></img>
            <img src={star_icon} alt='' className='img-fluid'></img>
            <span>(122)</span>
          </div>
          <div className='item-prices d-flex my-lg-3 '>
                <div className='me-3 fw-bold'>${product.new_price}</div>
                <div className='text-decoration-line-through text-secondary'>${product.old_price}</div>
           </div>
           <p>
           A light weight usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment
           </p>
           <p>Select size</p>
            <div className='sizes d-flex text-center'>
              <button className='size me-lg-2 my-lg-2 p-lg-1'>XS</button>
              <button className='size m-lg-2 p-lg-1 '>S</button>
              <button className='size m-lg-2 p-lg-1 '>M</button>
              <button className='size m-lg-2 p-lg-1 '>L</button>
              <button className='size m-lg-2 p-lg-1 '>XL</button>
            </div>
            <button className='btn btn-danger my-lg-3'>Add to cart</button>
        </div>
      </div> 
      
    </div>
  )
}
