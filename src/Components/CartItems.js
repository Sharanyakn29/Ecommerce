import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import './CartItems.css'

const CartItems = () => {

const {all_products,cartItems,removeFromCart,itemSize,getTotalCartAmount} = useContext(shopContext)

    return (
    <div className='container'>
        <div className='titles row d-lg-flex d-none justify-content-evenly align-items-center fw-bold mb-2'>
            <div className='col-1'>Products</div>
            <div className='col-10 d-flex flex-row text-center'>
                <div className='col-4'>Title</div>
                <div className='col-1'>Size</div>
                <div className='col-2 '>Price</div>
                <div className='col-1'>Quantity</div>
                <div className='col-2'>Total</div>
                <div className='col-2'>Remove</div>
            </div>
        </div>
        <hr  class=" hr"></hr>

            {all_products.map((e) =>{
                if(cartItems[e.id] >0 && itemSize[e.id]!==''){
                    return <div className='cart-items row d-flex justify-content-evenly align-items-center para-font my-lg-0 my-3'>
                                <div className='col-lg-1 col-6'><img src={e.image} alt='' className='item-img my-lg-2 img-fluid'></img> </div>
                                <div className='col-lg-10 col-6 d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-center px-0'>
                                    <div className='col-lg-4'> <p className='mb-0'>{e.name}</p></div>  

                                    <div className='col-lg-1 text-lg-center my-lg-0 my-1'>
                                        <span className='d-lg-none text-start fw-bold'>Size:</span> <span>{itemSize[e.id]}</span></div> 

                                    <div className='col-lg-2 text-lg-center my-lg-0 my-1'>
                                        <span className='d-lg-none fw-bold'>Price:</span> <span>$ {e.new_price}</span></div>   

                                    <div className='col-lg-1 text-lg-center my-lg-0 my-1'>
                                        <span className='d-lg-none fw-bold'>Qty:</span> <span>{cartItems[e.id]}</span></div>

                                    <div className='col-lg-2 text-lg-center my-lg-0 my-1'>
                                        <span className='d-lg-none fw-bold'>Total:</span> <span>{e.new_price * cartItems[e.id]}</span></div>

                                    <div className='col-lg-2 d-flex justify-content-center align-self-center'>
                                        <img src={remove_icon} onClick={() => removeFromCart(e.id)} className='delete-icon' alt=""></img>
                                     </div>                 
                                </div> 
                            </div> 
                }
            })}
            <div className='row my-5 para-font'>
                <div className='col-lg-6 col-12 cart-totals '>
                    <h3 className='mb-lg-3'>Cart totals</h3>
                    <div>
                        <div className='d-flex justify-content-between align-items-center mb-2'>
                            <p className='m-0'>Subtotal</p>
                            <p  className='m-0'>$ {getTotalCartAmount()}</p>
                        </div>
                        <hr className='hr'></hr>
                        <div className='d-flex justify-content-between align-items-center mb-2'>
                            <p className='m-0'>Shipping fee</p>
                            <p  className='m-0'>free</p>
                        </div>
                        <hr className='hr'></hr>
                        <div className='d-flex justify-content-between mb-2'>
                            <p  className='m-0'>Total</p>
                            <p className='fw-bold m-0'>$ {getTotalCartAmount()}</p>
                        </div>
                        <button className='pay-btn btn btn-danger mt-lg-2'>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
                <div className='col-lg-6 col-12'>
                    <div className='ms-lg-5 my-4'>
                        <p className='ms-lg-3'>If you have a promo code, please enter it here</p>
                        <div className='promo-container ms-lg-3'>
                            <input className='promo-input' placeholder='Promo code'></input>
                            <button className='promo-btn btn btn-dark'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>       
    </div>
  )
}

export default CartItems
