import React from 'react';
import { Headers } from './';
import { Footer } from'./';




const Layout = ({ children }) => {
  return (
    <>
        <Headers/>
        {children}
        <Footer/>        
    </>
  )
}

export default Layout