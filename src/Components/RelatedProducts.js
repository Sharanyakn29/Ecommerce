import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import Item from './Item'

export default function RelatedProducts(props) {
    const {all_products} = useContext(shopContext)
    const required = all_products.filter((product)=> props.category === product.category).slice(0,4)

  return (
    <div className='container mt-lg-5 mt-4'>
    <h1 className='fw-bold text-center mb-lg-4 mb-4 text'> RELATED PRODUCTS</h1>
    <div className='row'>
      {required.map((item,i) =>{
        if(props.category === item.category){
          return(<Item key={i} id={item.id} name={item.name} image={item.image} oldPrice={item.old_price} newPrice={item.new_price}></Item>)
        }
        else
          return null       
        }
      )}
    </div>  
  </div>
  )
}
