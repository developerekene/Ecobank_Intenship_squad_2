import React from 'react';
import "../Home/Home.css";
import man from  "../../../Image/png/man.png";
import lady from  "../../../Image/png/lady.png";
import man2 from  "../../../Image/png/man2.png";

const Home = () => {
  return (
    <section class="container">
      <div class="welcome">
        <div class="welcome_image"></div>
        <h2>Title</h2>
        <p>text</p>
      </div>
      <div class="card">
            <div class="cards">
              <div class="card_image">
                <h2>Title</h2>
                <p>text</p>
              </div>
            </div>

            <div class="cards">
              <div class="card_image">
                <h2>Title</h2>
                <p>text</p>
              </div>
            </div>

            <div class="cards">
              <div class="card_image">
                <h2>Title</h2>
                <p>text</p>
              </div>
            </div>
          </div>        
    </section>
  )
}

export default Home