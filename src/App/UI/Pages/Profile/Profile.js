import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import "./Profile.css"
import Button from "../../Components/button/NavigateButton/NavigateButton";
import { FaFlag } from 'react-icons/fa';
import youtube from "../../../Image/png/youtube.png";
import instagram from "../../../Image/png/instagram.png"
import github from "../../../Image/png/github.png"
import figma from "../../../Image/png/figma.png"
import star from "../../../Image/png/star.png"


import AOS from 'aos';
import 'aos/dist/aos.css';

const Profile = () => {
  const [toggler, setToggler] = useState("about")
  const userDetails = document.getElementsByClassName('tab')
  const setActive = (e) => {
    for (let i = 0; i < userDetails.length; i++) {
      userDetails[i].classList.remove('active')
    }
    e.target.classList.add('active')
  }

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Navbar />
      <div className="Profile">
        <div className="upper-container">
          <div className="col-md-4">
            <div className="image-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQKVgKb7G1p4Y-l2k9Vk9VSy5rVixd4D8mQ&usqp=CAU" alt='' height="100px" width="100px" />
            </div>

          </div>
        </div>
        <div className='to-flex'>

          <div className="middle-container">
            <div className="col-md-6">
              <h5 className='name'>Stephen Curry</h5>
              <h6 className='job'>Frontend web developer</h6>
              <p>1234 Elm Street</p>
              <p>City, State, Zip Code</p>
              <p>
                <FaFlag /> United States
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <Button type="submit" text={"Edit Profile"} class="edit-profile" />
            <Button type="submit" text={"Upload CV"} class="edit-profile" />
          </div>
        </div>


        <div className="skills-container">
          <p>Skills <img src={star} /></p>
          <div className='buttons'>
            <div className='part-one'>
              <button>Web development</button>
              <button>UX Design</button>
            </div>
            <div className='part-two'>
              <button>UI Design</button>
              <button>Data science</button>
            </div>
          </div>
        </div>

        <div className='user-about-and-timeline-container'>
          <ul className="user-about-and-timeline" role="tablist">
            <li className="user-about user-details" onClick={() => {
              setToggler("about");
            }}>
              <a className="nav-link tab active " id="home-tab" onClick={(e) => {
                setActive(e)
              }} data-toggle="tab" href="#home" role="tab">About</a>
            </li>
            <li className="user-timeline user-details" onClick={() => { setToggler("timeline") }}>
              <a className="nav-link tab " id="profile-tab" onClick={(e) => {
                setActive(e)
              }} data-toggle="tab" href="#profile" role="tab">Timeline</a>
            </li>
          </ul>

          <div className='about-and-timeline'>
            {
              toggler === "about" ?
                <div className='about-container'>
                  <p>I'm a Product Designer based in Los Angeles, USA. I specialise in Web development, brand strategy and UX/UI desin. I'm always striving to grow and learn something new and I don't take myself too seriously.</p>
                </div>
                :
                <div className='timeline-container'>
                  <div className='Education-section'>
                    <h3>Education</h3>
                    <div className='timeline-content' data-aos="fade-up">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis quam eget dui pulvinar, sed vulputate tortor vestibulum. Vivamus gravida dui vel justo ullamcorper, vel viverra elit blandit. Nullam nec consectetur orci. Quisque ac diam eu arcu euismod fringilla. Maecenas in bibendum ex.
                      </p>

                    </div>
                  </div>

                  <div className='Experience-section'>
                    <h3>Experience</h3>
                    <div className='timeline-content' data-aos="fade-up">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis quam eget dui pulvinar, sed vulputate tortor vestibulum. Vivamus gravida dui vel justo ullamcorper, vel viverra elit blandit. Nullam nec consectetur orci. Quisque ac diam eu arcu euismod fringilla. Maecenas in bibendum ex.
                      </p>

                    </div>

                  </div>
                </div>
            }
          </div>
        </div>

        <div className="lower-container">
          {/* left side url */}
          <div className="col-md-4">
            <div className="profile-work">
              <p className='title'>WORK LINK</p>
              <a><img src={youtube} />Youtube</a> <br />
              <a><img src={instagram} />Instagram</a> <br />
              <a><img src={github} />Github</a> <br />
              <a><img src={figma} />Figma</a> <br />
            </div>
          </div>
          {/* right side url */}
        </div>
      </div>
      <Footer />
    </>

  )
}



export default Profile