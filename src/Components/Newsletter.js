import React from 'react'
import './Newsletter.css'

export default function Newsletter() {
  return (
    <div>
        <div className=' newsletter container p-lg-5 text-center my-lg-5 my-4'>
            <h1 className='pt-3 fw-bold'>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div class="input-group mb-lg-3 pb-3 ">
                <input type="text" class="newsletter-input" placeholder="Your Email Id" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button class="btn btn-outline-secondary me-lg-5 bg-dark text-light" type="button" id="button-addon2">Subscribe</button>
            </div>
        </div>    
    </div>
  )
}
