import {useEffect,React} from 'react';
import "../Home/Home.css";
import vectorGroup from "../../../Image/svg/vector-group.svg"
import Button from '../../Components/button/NavigateButton/NavigateButton';
import OnClick from '../../Components/button/ToggleSignupLogin/Button'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';


//Importing Animate on Scroll library

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Tools } from '../../../utils/Constant';
import { useState } from 'react';
import Input from '../../Components/input/Input';
import TextArea from '../../Components/textarea/TextArea';




function Home() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <>
      <Navbar />
      <section className="Home">
        <div className="hero-section">
          <div className="welcome-text">
            <h2>Connecting Talent to Companies</h2>
            <p>A revolutionary platform dedicated to empowering young interns by connecting them with companies seeking their skills and creativity.</p>
            <Button text={"Get Started"} />
          </div>
          <div className="hero-image">
            <img src={vectorGroup} alt="" />
            <img src={Tools.images.lady} alt=''></img>
          </div>
        </div>
        <div className="WWD-Section">
          <div data-aos="fade-up" className='caption'>
            <h2>What We Do?</h2>
            <p>Welcome to our "What We Do" section, where we take pride in our mission to bridge the gap between aspiring young interns and companies seeking fresh talent. </p>
          </div>
          <div className='description'>
            <div data-aos="fade-up" className='description-image'>
              <img src={Tools.images.potential} alt="" />
            </div>
            <div data-aos="fade-up">
              <h3>We Give you the Key to Unlocking Your Potential</h3>
              <p>Welcome to our platform dedicated to empowering young talent like you! Discover exciting internship opportunities with companies that
                value your skills and creativity. Whether you're a budding designer, marketer, programmer, or writer, we have the perfect internships to kickstart your career journey.</p>
            </div>
          </div>
          <div className='description'>
            <div data-aos="fade-up">
              <h3>We Help you Discover Exceptional Interns</h3>
              <p>Are you a company looking for fresh and motivated talent to join your ranks? Find your dream team of interns right here! Our platform connects you with aspiring young
                professionals who bring innovation and enthusiasm to your projects. Post your internships and let the next generation of talent contribute to your success.</p>
            </div>
            <div data-aos="fade-up" className='description-image'>
              <img src={Tools.images.discover} alt="" />
            </div>
          </div>
          <div className='description'>
            <div data-aos="fade-up" className='description-image'>
              <img src={Tools.images.Meet} alt="" />
            </div>
            <div data-aos="fade-up">
              <h3>Where Passion Meets Purpose</h3>
              <p>At our platform, we believe in the power of purpose-driven internships. We match passionate interns with companies that share their values and visions. Make a
                meaningful impact on real-world projects while gaining invaluable experience. Join us in shaping a future where passion and purpose unite to create a better world.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>

  );
}

export default Home


