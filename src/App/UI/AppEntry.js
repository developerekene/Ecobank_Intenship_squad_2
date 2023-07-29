import React from 'react';
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar';
import BrowseOpportunity from './Pages/BrowseOpportunity/BrowseOpportunity';

const AppEntry = () => {
  return (
    <>
      <Navbar />
      <BrowseOpportunity />
      <Footer />
    </>
  )
}

export default AppEntry