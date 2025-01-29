import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUpPage() {
    const[error,setError] = useState("")
    const[formData,setFormData] = useState({userId:"",password:"",confirmPassword:""})
    const navigate = useNavigate()
  
    const handleChange = (e) =>{
      const{name,value} = e.target
      setFormData({...formData,[name]:value})
    }
  
    const validatePassword = (password) =>{
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
      return regex.test(password);
    }
  
    const handleSignUp = () =>{
      const{userId,password,confirmPassword} = formData
  
      const users = JSON.parse(localStorage.getItem("users"))||{}
  
      if(!userId || !password || !confirmPassword){
        setError("Please enter all the fields")
        return
      }
      if(users[userId]){
        setError("Account alredy exists")
        return
      }
      if (!validatePassword(password)){
        alert(`Password must be 8-16 character long.\nMust contain atleast one capital letter,small letter,a digit and one special charater.\nNo spaces allowed.`)
        return
      }
      if(password !== confirmPassword){
        setError("Passwords do not match, please check the password")
        return
      }    
        
      // Add new user
      users[userId] = password
      // Save users to localStorage
      localStorage.setItem("users",JSON.stringify(users))
  
      alert("SignUp successfull! You can now login")
      navigate('/')
    }

  return (
    <div className='login-main-container'>
      <div className='signup-container'>
        <h3 className='mb-3'>Sign Up</h3>
        <div>
          <input type='text' placeholder='Your name' className="input form-control my-2"  name="userId" value={formData.userId} onChange={handleChange}></input>

          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password'className="input form-control my-2" ></input>

          <input type="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} 
          placeholder='Confirm Password'  className="input form-control my-2"></input>
        </div>

        <div>
          <button className='btn btn-danger'onClick={handleSignUp}>Continue</button>
        </div>

        <p className='mt-2 '>Already have an account? <span className='text-danger fw-bold'style={{cursor:"pointer"}} onClick={()=>navigate('/LoginPage')}>Login here</span></p>

        <div className='d-flex align-items-center'>
          <input type='checkbox'className='checkbox' ></input>
          <p className='ms-3 mb-0'>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>

        <p className='my-2 text-center'> {error} </p> 
      </div>
    </div>
  )
}
