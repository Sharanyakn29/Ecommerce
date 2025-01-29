import React, { useEffect, useRef} from 'react'
import {useNavigate } from 'react-router-dom'
import './LoginPage.css'

export default function LoginPage({handleChange,handleLogin,loginToShop,error,setError,formData,isLoggedIn}) {

  const navigate = useNavigate()
  const focusRef = useRef()

  useEffect(()=>{
    focusRef.current.focus()
    },[])

  return (
    <div className='login-main-container'>
      <div className='login-container'>
        <h3 className='mb-3'>Login</h3>
        <div>
          <input type='text' placeholder='Your name' name="userId" className="input form-control my-2" value={formData.userId} onChange={handleChange} ref={focusRef}></input>

          <input type='password' placeholder='Password' name="password" className="input form-control my-2" value={formData.password} onChange={handleChange}></input>
        </div>

        <div>
          <button className='btn btn-danger'onClick={handleLogin}>Continue</button>
        </div>

        <p className='mt-2 '>Create an account? <span className='text-danger fw-bold'  style={{cursor:"pointer"}} onClick={()=>navigate('/SignUpPage')}>Click here</span></p>

        <div className='d-flex align-items-center'>
          <input type='checkbox'className='checkbox' ></input>
          <p className='ms-3 mb-0'>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>

        <p className='m-0 mt-4 text-center'>
            <span>Forgot password? </span>
            <span onClick={()=>navigate('/ForgotPassword')} style={{cursor:"pointer"}} className='cursor-pointer text-danger fw-bold'>Click here</span>
        </p>

        <p className='error my-lg-3 my-3 mt-2 text-center'> {error} </p> 
      </div>
    </div>
  )
}
