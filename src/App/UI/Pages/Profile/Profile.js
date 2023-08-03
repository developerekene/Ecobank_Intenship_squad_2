import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Assets } from '../../../Constants/Assets';
import "./Profile.css"
import Button from "../../Components/button/NavigateButton/NavigateButton";

const Profile = () => {
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
            <Button type="submit" text="Edit Profile" />
          </div>


        </div>
        <div className="middle-container">
          <div className="col-md-6">
            <h5>Stephen Curry</h5>
            <h6>Frontend web developer</h6>
            <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 6/10 </span></p>

          </div>

          <div className='user-about-and-timeline-container'>
            <ul className="user-about-and-timeline" role="tablist">
              <li className="user-about">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
              </li>
              <li className="user-timeline">
                <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
              </li>
            </ul>
          </div>






        </div>

        <div className="lower-container">
          {/* left side url */}
          <div className="col-md-4">
            <div className="profile-work">
              <p>WORK LINK</p>
              <a>Youtube</a> <br />
              <a>Instagram</a> <br />
              <a>Github</a> <br />
              <a>Figma</a> <br />
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