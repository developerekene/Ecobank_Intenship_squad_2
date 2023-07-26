import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Button from './Components/button/Button';

const AppEntry = () => {
  return (
    <>
      <Navbar />
      <Button text={'Get started'} />
      <Footer />

    </>
  )
}

export default AppEntry