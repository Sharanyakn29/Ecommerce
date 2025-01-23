import React, { useState } from 'react'
import { createContext } from 'react'

import all_products from '../Assets/all_product'

export const shopContext = createContext(null)

const defaultCart = () =>{
  let cart = {}
  for(let index =0; index<all_products.length +1 ;index++){
    cart[index] = 0
  }
  return cart
}

const defaultSize = () =>{
  let sizes = {}
  for(let index =0; index<all_products.length +1 ;index++){
    sizes[index] = ' '
  }
  return sizes
}

function ShopContextProvider(props) {

  const[cartItems,setCartItems] = useState(defaultCart())
  const[itemSize,setItemSize] = useState(defaultSize())

  const getTotalCartAmount = (item) =>{
    let totalAmount = 0
    for(let item in cartItems){
      if(cartItems[item] > 0){
        const itemInfo = all_products.find((product) => product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item]      
      }
    }
    return totalAmount  
    }

  const getTotalCartItems = (item) =>{
    let totalItems = 0
    for(let item in cartItems){
      if(cartItems[item] > 0){
        totalItems += cartItems[item]      
        console.log(cartItems[item]) 
      }
    }
    return totalItems
    }

    const addToCart = (itemId) =>{
      const size = itemSize[itemId]

      if(!size){
        alert("Please select the size")
      }
      setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId) =>{
      setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const addItemSize = (itemId,size) =>{
      setItemSize((prev) => ({...prev,[itemId]:prev[itemId]+' '+size}))
    }

    const handleSizeSelect = (itemId,size) =>{
      setItemSize((prev)=> ({...prev,[itemId]:size}))
    }


    const contextValue = {all_products,cartItems,addToCart,removeFromCart,itemSize,handleSizeSelect,addItemSize,getTotalCartAmount,getTotalCartItems}
    
  return (
    <div>
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>      
    </div>
  )
}

export default  ShopContextProvider
