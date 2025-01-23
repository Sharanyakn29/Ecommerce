import React, { useContext, useState } from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { shopContext } from '../Context/ShopContext'

export default function Navbar(props) {

    const[menu,setMenu] = useState("Shop")
    const{getTotalCartItems} = useContext(shopContext)

  return (
    <div>
        <header className='container-fluid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <nav className='navbar navbar-expand-lg justify-content-lg-evenly'>
                            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                                    <span class="navbar-toggler-icon"></span>
                            </button> 

                            <div className='d-flex align-items-center justify-content-center'>
                                <img src={logo} alt='logo' className='app-logo'></img>
                                <h5 className='logo-name mx-lg-3 my-lg-0 mx-2 fw-bold'>SHOPPER'S STOP</h5>
                            </div>
                                                      
                            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                                <ul class="navbar-nav align-items-center">
                                    <li className='nav-item'onClick={()=>setMenu("Shop")}>
                                        <Link to='/' className='nav-link'>Shop</Link> {menu==="Shop"?<hr></hr>:<></>}                                        
                                    </li>
                                    <li className='nav-item'onClick={()=>setMenu("Men")}>
                                        <Link to='/men'className='nav-link'>Men</Link>
                                        {menu==="Men"?<hr></hr>:<></>}
                                    </li>
                                    <li className='nav-item'onClick={()=>setMenu("Women")}>
                                        <Link to='/women'className='nav-link'>Women</Link>{menu==="Women"?<hr></hr>:<></>}
                                    </li>
                                    <li className='nav-item'onClick={()=>setMenu("Kids")}>
                                        <Link to='/kids'className='nav-link'>Kids</Link>{menu==="Kids"?<hr></hr>:<></>}
                                    </li>
                                </ul>
                            </div>
                            <div  className='nav-login'>
                               <Link to='/LoginPage' className='d-md-block d-none'> <button>{props.isLoggedIn===true?"Logout":"Login"}</button></Link>
                               <Link to='/cart'>
                                 <FontAwesomeIcon icon={faCartShopping} className='cart-icon text-dark'/>
                               </Link>                               
                                <div className='nav-cart-count'>{getTotalCartItems()}</div>
                            </div>                            
                        </nav>

                        <div class="offcanvas offcanvas-start" id="mobileMenu" tabindex="-1" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title fs-2" id="offcanvasExampleLabel">SHOPPER'S STOP</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <hr className='border border-light border-2 opacity-50'></hr>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav">
                                    <li className='nav-item'>
                                        <Link to='/' className='nav-link'>Shop</Link>                                         
                                    </li>
                                    <li className='nav-item'>
                                        <Link to='/men'className='nav-link'>Men</Link>
                                        {menu==="Men"?<hr></hr>:<></>}
                                    </li>
                                    <li className='nav-item'>
                                        <Link to='/women'className='nav-link'>Women</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to='/kids'className='nav-link'>Kids</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to='/LoginPage'> <button>Login</button></Link>
                                    </li>
                                    
                                </ul>
                            </div>                          
  
                        </div>
                    </div>
                </div>
            </div>
        </header>             
    </div>
  )
}
