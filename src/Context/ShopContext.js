import React, { useState } from 'react'
import { createContext } from 'react'

import all_products from '../Assets/all_product'

export const shopContext = createContext(null)

// const defaultCart = () =>{
//   let cart = {}
//   for(let index =0; index<all_products.length +1 ;index++){
//     cart[index] = 0
//   }
//   return cart
// }


function ShopContextProvider(props) {

  // const[cartItems,setCartItems] = useState(defaultCart())

  // const addToCart = (itemId) =>{
  //   const size = itemSize[itemId.id]
  //   console.log(size)
 
  //     setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
  // }

  //   const removeFromCart = (itemId) =>{
  //     setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
  //   }

    const [cartItems,setCartItems] = useState([])
    const [selectedSizes,setSelectedSizes] = useState({itemId:"XS"})
    console.log(cartItems)

    const handleSizeSelect = (itemId,size) =>{
      setSelectedSizes({...selectedSizes,[itemId]:size})
    }

    const addToCart = (item) =>{
      const selectedSize = selectedSizes[item.id]
      if(!selectedSize) {
        alert("Please select a size before adding to cart!")
        return
      }

      const existingItem = cartItems.find((cartitem) => cartitem.id === item.id && cartitem.size === selectedSize)
      if(existingItem){
        setCartItems(
          cartItems.map((cartitem)=> cartitem.id === item.id && cartitem.size === selectedSize ?{...cartitem, quantity:cartitem.quantity+1}:cartitem))
      }
      else{
        setCartItems([...cartItems,{...item,size:selectedSize,quantity:1}])
      }

      // setSelectedSizes({...selectedSizes,[item.id]:null})
    }

    const removeFromCart = (itemId,size) =>{
      setCartItems(cartItems.filter((cartItem)=>!(cartItem.id === itemId && cartItem.size === size) ))
      }

      
  // const getTotalCartAmount = (item) =>{
  //   let totalAmount = 0
  //   for(let item in cartItems){
  //     if(cartItems[item] > 0){
  //       const itemInfo = all_products.find((product) => product.id === Number(item))
  //       totalAmount += itemInfo.new_price * cartItems[item]      
  //     }
  //   }
  //   return totalAmount  
  //   }

    // const getTotalCartAmount = (item)=>{
    //   let totalAmount = 0
    //   for(let item in cartItems){
    //     if(item.quantity > 0){
    //       const itemInfo = all_products.find((product) => product.id === Number(item.id))
    //       totalAmount += itemInfo.new_price * item.quantity  
    //       console.log(totalAmount)    
    //     }
    //   }
    //   return totalAmount  
    //   }

   
    const getTotalCartAmount =()=>{
      let totalAmount = 0
      cartItems.map((item)=>{
        if(item.quantity > 0){

          const itemInfo = all_products.find((product) => product.id === Number(item.id))
          totalAmount += itemInfo.new_price * item.quantity 
          console.log(totalAmount)  
        }    
      }     
     )
    return totalAmount  
    } 

    const getTotalCartItems = (item) =>{
      let totalItems = 0
      cartItems.map((item)=>{
        if(item.quantity > 0){
          totalItems += item.quantity  
        }    
      }     
      )
      return totalItems
    }   

  const contextValue = {all_products,cartItems,addToCart,removeFromCart,handleSizeSelect,getTotalCartAmount,selectedSizes,getTotalCartItems}
    
  return (
    <div>
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>      
    </div>
  )
}

export default  ShopContextProvider
