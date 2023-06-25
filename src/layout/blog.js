import React from 'react'
import Header from '../component/header';
import { Outlet } from 'react-router-dom';
import Footer from '../component/footer';

const Blog = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Blog;
