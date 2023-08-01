import React from 'react';
import "../Home/Home.css";
import man from  "../../../Image/png/man.png";
import lady from  "../../../Image/png/lady.png";
import man2 from  "../../../Image/png/man2.png";
import stats2 from "../../../Image/png/stats2.png"
import Button from '../../Components/button/Button';




const Home = () => {
  return (
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
              </div>
              <div class="card_image"></div>
            </div>

            <div class="cards">
            <div className='card_text'>
                <h3>Our Impact</h3>
                <Button text={"Reviews"} />
              </div>
              <div class="card_image">
                <img src={stats2}></img>
              </div>
            </div>

            <div class="cards">
              <div class="card_text">
                <h3>Upload or Update your CV</h3>
                <p></p>
              </div>
              <div class="card_image"></div>
            </div>
          </div>        
    </section>
  )
}

export default Home