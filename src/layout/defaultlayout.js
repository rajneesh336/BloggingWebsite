import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/header'
import Footer from '../component/footer'
import Slider from '../component/slider'
const defaultlayout = () => {
  return (
   <div>
      <Header/>
      <Slider/>
      <Outlet/>
      <Footer/>
   </div>    
  )
}

export default defaultlayout
