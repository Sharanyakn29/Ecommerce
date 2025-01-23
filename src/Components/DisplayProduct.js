import React, { useContext} from 'react'
import { shopContext } from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import '../Routes/Product.css'
import star_icon from '../Assets/star_icon.png'


export default function DisplayProduct() {
    const {all_products} = useContext(shopContext)
  const {addToCart} = useContext(shopContext)
  const {addItemSize} = useContext(shopContext)
  const {productId} = useParams() 
  const product = all_products.find((e) => e.id === Number(productId))

  const handleClick = (e) =>{
    const buttonText = e.target.innerText
      return buttonText
  }

  return (
    <div className='row my-lg-4'>
        <div className='display-left col-lg-6 col-12 px-lg-0 d-flex'>
          <div className='display-img-list d-flex flex-column ms-sm-3'>
            <img src={product.image} alt='' className='img-fluid'></img>
            <img src={product.image} alt='' className='img-fluid'></img>
            <img src={product.image} alt='' className='img-fluid'></img>
            <img src={product.image} alt='' className='img-fluid'></img>
          </div>
          <div className=' d-flex flex-column'>
            <img src={product.image} alt='' className=' display-main-img img-fluid'></img>
          </div>
        </div>

        <div className='col-lg-6 col-12 px-4 px-lg-0'>
          <h2 className='product-name mt-lg-2 mt-4'>{product.name}</h2>
          <div>
            <img src={star_icon} alt='' className='img-fluid'></img>
            <img src={star_icon} alt='' className='img-fluid'></img>
            <img src={star_icon} alt='' className='img-fluid'></img>
            <img src={star_icon} alt='' className='img-fluid'></img>
            <img src={star_icon} alt='' className='img-fluid'></img>
            <span>(122)</span>
          </div>
          <div className='item-prices d-flex my-lg-4 my-3'>
                <div className='me-3 fw-bold'>${product.new_price}</div>
                <div className='text-decoration-line-through text-secondary'>${product.old_price}</div>
           </div>
           <p className='description'>
           A light weight usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment
           </p>
           <p className='fw-bold'>Select size</p>
            <div className='sizes d-flex text-center'>
              <button className='size ms-0 m-2 my-lg-2 p-lg-1' onClick={(e) => addItemSize(product.id,handleClick(e)) }>XS</button>
              <button className='size m-2 p-lg-1 ' onClick={(e) => addItemSize(product.id,handleClick(e))}>S</button>
              <button className='size m-2 p-lg-1 'onClick={(e) => addItemSize(product.id,handleClick(e))}>M</button>
              <button className='size m-2 p-lg-1 ' onClick={(e) => addItemSize(product.id,handleClick(e))}>L</button>
              <button className='size m-2 p-lg-1 ' onClick={(e) => addItemSize(product.id,handleClick(e))}>XL</button>
            </div>
            <button onClick={() => addToCart(product.id)} className='btn btn-danger my-3'>Add to cart</button>
        </div>
      </div>  
  )
}
