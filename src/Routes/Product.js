import React, { useContext} from 'react'
import { shopContext } from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import BreadCrum from '../Components/BreadCrum'
import RelatedProducts from '../Components/RelatedProducts'
import DisplayProduct from '../Components/DisplayProduct'

export default function Product() {

  const {all_products} = useContext(shopContext)
  const {productId} = useParams() 
  const product = all_products.find((e) => e.id === Number(productId))

  return (
    <div className='container'>
      <BreadCrum product={product}></BreadCrum>   
      <DisplayProduct></DisplayProduct>
      <RelatedProducts category={product.category}></RelatedProducts>
    </div>
  )
}
