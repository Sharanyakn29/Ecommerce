import './App.css';
import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom'
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Shop from './Routes/Shop';
import ShopCategory from './Routes/ShopCategory';
import Product from './Routes/Product';
import LoginPage from './Routes/LoginPage';
import Cart from './Routes/Cart';
import Footer from './Components/Footer'
import men_banner from '../src/Assets/banner_mens.png'
import women_banner from '../src/Assets/banner_women.png'
import kids_banner from '../src/Assets/banner_kids.png'
import SignUpPage from './Routes/SignUpPage';
import ForgotPassword from './Routes/ForgotPassword';

function App() {

  const[error,setError] = useState('')
  const[formData,setFormData] = useState({userId:'',password:''})
  const[isLoggedIn,setIsLoggedIn] = useState(false)

  const navigate = useNavigate()
  const users = JSON.parse(localStorage.getItem("users"))||{}

  const handleChange = (e) =>{
    const{name,value} = e.target
    setFormData({...formData,[name]:value})   
  }

  const loginToShop = () =>{
    navigate('/')
  }

  const handleLogin = () =>{
    const{userId,password} = formData
    
    if(!userId || !password){
      setError("Please enter all the fields")
    }
    else if(users[userId]!== password){
      setError("Invalid user Id or password")
    }
    else if(users[userId] && users[userId]===password){
      loginToShop()
      alert("Login successful")
      setFormData({userID:'',password:''})
      setIsLoggedIn(!isLoggedIn)
      console.log(formData)
    }
    else{
      setError("You dont have accout, please sign up") 
    }    
  }  

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn}/>
        <Routes>
          <Route path="/" element={<Shop/>}></Route>
          <Route path='/men' element={<ShopCategory category={"men"} banner={men_banner}/>}></Route>
          <Route path='/women' element={<ShopCategory category={"women"} banner={women_banner} />}></Route>
          <Route path='/kids' element={<ShopCategory category={"kid"} banner={kids_banner} />}></Route>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}></Route>
          </Route>
          <Route path='/loginPage' element={<LoginPage handleLogin={handleLogin} handleChange={handleChange} loginToShop={loginToShop} error={error} setError={setError} formData={formData} setFormData={setFormData} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
          <Route path='SignUpPage' element={<SignUpPage/>}></Route>
          <Route path='/ForgotPassword' element={<ForgotPassword/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
        </Routes>
        <Footer></Footer>
    </>
  );
}

export default App;
