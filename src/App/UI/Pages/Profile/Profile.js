import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import "./Profile.css"
import Button from "../../Components/button/NavigateButton/NavigateButton";
import { FaFlag } from 'react-icons/fa';
import youtube from "../../../Image/png/youtube.png";
import instagram from "../../../Image/png/instagram.png"
import github from "../../../Image/png/github.png"
import figma from "../../../Image/png/figma.png"


const Profile = () => {
  const [toggler, setToggler] = useState("about")
  const userDetails = document.getElementsByClassName('tab')
  const setActive = (e) => {
    for (let i = 0; i < userDetails.length; i++) {
      userDetails[i].classList.remove('active')
    }
    e.target.classList.add('active')
  }

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
          <div className="col-md-2">
            <Button type="submit" text={"Edit Profile"} class="edit-profile" />
          </div>


        </div>
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
                  <div className='timeline-content'>

                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>749950764</p>
                    </div>

                    <div className="col-md-6">
                      <label>Duration</label>
                    </div>
                    <div className="col-md-6">
                      <p>3 Months</p>
                    </div>

                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>stephencurry30@gmail.com</p>
                    </div>

                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>+1(408) 785-9959</p>
                    </div>

                    <div className="col-md-6">
                      <label>Profession Given</label>
                    </div>
                    <div className="col-md-6">
                      <p>Web developer</p>
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