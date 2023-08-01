import React from 'react';
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar';
import IndexRouter from './../Route/IndexRouter'

const AppEntry = () => {
  return (
    <>
      <Navbar />
      <IndexRouter/>
      <Footer />
    </>
  )
}

export default AppEntry