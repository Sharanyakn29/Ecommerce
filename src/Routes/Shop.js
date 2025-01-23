import React from 'react'
import Hero from '../Components/Hero'
import Popular from '../Components/Popular'
import Offers from '../Components/Offers'
import NewCollections from '../Components/NewCollections'
import Newsletter from '../Components/Newsletter'

export default function Shop() {
  return (
    <div>
       <Hero></Hero>
        <Popular></Popular>
        <Offers></Offers> 
        <NewCollections></NewCollections>
        <Newsletter></Newsletter>    
    </div>
  )
}
