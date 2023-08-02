import React from 'react';
import "../Home/Home.css";
import man from  "../../../Image/png/man.png";
import lady from  "../../../Image/png/lady.png";
import man2 from  "../../../Image/png/man2.png";
import stats2 from "../../../Image/png/stats2.png"
import partnership from "../../../Image/png/partnership.png";
import Button from '../../Components/button/Button';
import CV from "../../../Image/png/CV.png";
import Button from '../../Components/button/NavigateButton/NavigateButton';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';




const Home = () => {
  return (
    <>
      <Navbar />
      <section class="container">
        <div class="welcome">
          <div className="welcome_text_button">
            <h2>Connecting Talent to Companies</h2>
            <p>Providing you with the opportunity to maximize your abilities to the fullest</p>
            <Button text={"Learn more"} />
          </div>
          <div class="welcome_image">
            <img src={lady} ></img>
          </div>
        </div>
        <div class="card">
              <div class="cards">
                <div className='card_text'>
                  <h3>Partnership</h3>
                  <p>Work with us</p>
                  <Button text={"Learn more"} />
              </div>
              <div class="card_image">
                <img src={partnership} width={300}  ></img>
              </div>
                </div>

            <div class="cards">
            <div className='card_text'>
                <h3>Our Impact</h3>
                <p>Over 90% of our interns secure job offers after completing projects.KUM</p>
                <Button text={"Reviews"} />
              </div>
              <div class="card_image">
                <img src={stats2} width={"200px"}></img>
              </div>
            </div>

              <div class="cards">
                <div class="card_text">
                  <h3>Upload or Update your CV</h3>
                  <p>Keep your potential employees up to date!</p>
                </div>
              <div class="card_image">
                <img src={CV} width={150}></img>
              </div>
                </div>
            </div>        
      </section>
      <Footer />
    </>
    
  )
}

export default Home