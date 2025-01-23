import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export default function Item(props) {
  return (
    <div className='col-lg-3 col-6 mb-lg-5 mb-4 '>
      <Link to={`/product/${props.id}`}> <img src={props.image} alt='' className='img-fluid' onClick={window.scrollTo(0,0)}></img> </Link>
            <p className='img-name m-lg-0 my-1 my-lg-2'>{props.name}</p>
            <div className='item-prices d-flex '>
                <div className='me-3 fw-bold'>${props.newPrice}</div>
                <div className='text-decoration-line-through text-secondary'>${props.oldPrice}</div>
           </div>
    </div>
  )
}
