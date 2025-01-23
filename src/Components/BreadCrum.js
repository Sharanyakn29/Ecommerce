import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import './BreadCrum.css'

export default function BreadCrum(props) {

    const {product} = props;
  return (
    <div className='breadcrump my-lg-4 my-3'>
      HOME <img src={arrow_icon} alt=''></img> SHOP <img src={arrow_icon} alt=''></img> {product.category} <img src={arrow_icon} alt=''></img> {product.name}
    </div>
  )
}
