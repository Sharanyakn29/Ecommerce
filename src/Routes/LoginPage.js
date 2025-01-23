import React, { useContext, useEffect, useRef, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import './LoginPage.css'
import Navbar from '../Components/Navbar'
import { shopContext } from '../Context/ShopContext'

export default function LoginPage({handleChange,handleLogin,loginToShop,error,setError,formData,isLoggedIn}) {
  // const[formData,setFormData] = useState({userId:'',password:''})
  // const[isLoggedIn,setIsLoggedIn] = useState(false)

  const navigate = useNavigate()
  const focusRef = useRef()

  // const users = JSON.parse(localStorage.getItem("users"))||{}

  // const handleChange = (e) =>{
  //   const{name,value} = e.target
  //   setFormData({...formData,[name]:value})   
  // }

  // const loginToShop = () =>{
  //   navigate('/')
  // }

  // const handleLogin = () =>{
  //   const{userId,password} = formData
    
  //   if(!userId || !password){
  //     setError("Please enter all the fields")
  //   }
  //   else if(users[userId]!== password){
  //     setError("Invalid user Id or password")
  //   }
  //   else if(users[userId] && users[userId]===password){
  //     loginToShop()
  //     alert("Login successful")
  //     setFormData({userID:'',password:''})
  //     setIsLoggedIn(!isLoggedIn)
  //     console.log(formData)
  //   }
  //   else{
  //     setError("You dont have accout, please sign up") 
  //   }    
  // }

  useEffect(()=>{
    focusRef.current.focus()
    },[])

  return (
    <div className='login-main-container'>
      <div className='login-container'>
        <h3 className='mb-3'>Login</h3>
        <div>
          <input type='text' placeholder='Your name' name="userId" className="input form-control my-lg-2 my-1" value={formData.userId} onChange={handleChange} ref={focusRef}></input>

          <input type='password' placeholder='Password' name="password" className="input form-control my-lg-2 my-1" value={formData.password} onChange={handleChange}></input>
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

        <p className='my-3 text-center'> {error} </p> 
      </div>
    </div>
  )
}
