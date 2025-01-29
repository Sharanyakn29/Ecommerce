import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ForgotPassword() {
    const[error,setError] = useState("")
    const[formData,setFormData] = useState({userId:"",password:"",confirmPassword:""})
    const navigate = useNavigate()
  
    const handleChange = (e) =>{
      const{name,value} = e.target
      setFormData({...formData,[name]:value})
    }
  
    const updatePassword = () =>{
      const{userId,password,confirmPassword} = formData
      const users = JSON.parse(localStorage.getItem("users"))||{}
  
      if(!userId || !password || !confirmPassword){
          setError("Please enter all the fields")
          return
        }
  
      if(password !== confirmPassword){
          setError("Passwords do not match, please check the password")
          return
        }
  
      users[userId] = password
      localStorage.setItem("users",JSON.stringify(users)) 
      alert("Password updated!")
      navigate('/LoginPage')               
    }
  
  return (
    <div className='login-main-container'>
    <div className='login-container'>
      <h3 className='mb-3'>Reset password</h3>
      <div>
        <input type='text' placeholder='Your name' className="input form-control my-lg-3 my-2"  name="userId" value={formData.userId} onChange={handleChange}></input>

        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password'className="input form-control my-lg-3 my-2" ></input>

        <input type="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} 
        placeholder='Confirm Password'  className="input form-control my-lg-3 my-2"></input>
      </div>

      <div>
        <button className='btn btn-danger'onClick={updatePassword}>Update Password</button>
      </div>

      <div className='d-flex align-items-center mt-3'>
          <input type='checkbox'className='checkbox' ></input>
          <p className='ms-3 mb-0'>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>

      <p className='mt-3 text-center'> {error} </p> 
    </div>
  </div>
  )
}
