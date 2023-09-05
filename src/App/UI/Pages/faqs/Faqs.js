import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Search from '../../Components/search/Search'
import Accordion  from './Accordion';
import Accordion2  from './Accordion2';
import './Faqs.css'


const Faqs =()=>{
return (
  <div className='faqs'>
    <Navbar/>
        <section>
        <Search placeholder={"What is your question?"} width={"200px"} />

        <div className='header_text'>
          <p> General FAQs</p>
        </div>
        <Accordion />
        <div className='header_text'>
          <p>For Job seekers</p>
        </div>
        <Accordion2/>
      </section>
    <Footer/>
  </div>
  )
}

export default Faqs
