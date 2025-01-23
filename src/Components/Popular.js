import React from 'react'
import Item from './Item'
import dataProduct from '../Assets/data'

export default function Popular() {
  return (
  <div className='container my-lg-5 my-4'>
      <h1 className='fw-bold text-center mb-lg-5 my-3 text'>POPULAR IN WOMEN</h1>
      <div className='row mx-1 mx-lg-0'>
        {dataProduct.map((item,i) =>{
          return(<Item key={i} id={item.id} name={item.name} image={item.image} oldPrice={item.old_price} newPrice={item.new_price}></Item>)
        }
      )}
      </div>   
    </div>
  )
}
