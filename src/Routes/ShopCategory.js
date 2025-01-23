import React, {useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import './ShopCategory.css'
import dropDown_icon from '../Assets/dropdown_icon.png'
import Item from '../Components/Item'

export default function ShopCategory(props) {
  const {all_products} = useContext(shopContext)
  return (
    <div className='container'>
      <img src={props.banner} alt='' className='img-fluid mt-lg-4 mt-3 col-12'></img>
      <div className='d-flex my-lg-4 my-3 align-items-center justify-content-between mx-3'>
        <div className='sort-text'>
          <span className='fw-bold'>Showing 1-12 </span>
          <span>out of 36 products</span>
        </div>
        <div>
          <button className='sort-btn'>Sort <img src={dropDown_icon} alt=''></img> </button>
        </div>
      </div>

      <div className='row mx-1 mx-lg-0'>
        {all_products.map((item,i)=>{
          if (props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} oldPrice={item.old_price} newPrice={item.new_price}></Item>
          }
          else{
            return null
          }
        })}
      </div>          
    </div>
  )
}
