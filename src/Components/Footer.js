import React from 'react'
import logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsupp_icon from '../Assets/whatsapp_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import './Footer.css'


export default function Footer() {
  return (
    <div className='footer container-fluid py-3 p-0'>
        <div className='d-flex align-items-center justify-content-center '>
            <img src={logo} alt='logo'></img>
            <p className='mx-3 my-0 fw-bold fs-4'>SHOPPER'S STOP</p>
        </div>

        <div className=' my-lg-4 my-1'>
        <ul className='d-flex align-items-center justify-content-center list-unstyled list-style'>
            <li className='mx-md-4 my-1'>Company</li>
            <li  className='mx-md-4 my-1'>Product</li>
            <li className='mx-md-4  my-1' >Offices</li>
            <li className='mx-md-4  my-1'>About</li>
            <li className='mx-md-4  my-1'>Contact</li>
        </ul>
        <div className='d-flex  align-items-center justify-content-center my-4'>
            <div className='mx-3'><img src={instagram_icon} alt=''></img></div>
            <div  className='mx-3'><img  src={whatsupp_icon} alt=''></img></div>
            <div  className='mx-3'><img  src={pinterest_icon} alt=''></img></div>
        </div>
        <hr  class="border border-danger border-2 opacity-50"></hr>
        <div className='text-center'>
            <p>Copyrigth @ 2025 - All rights reserved</p>
        </div>

        </div>

    </div>
  )
}
