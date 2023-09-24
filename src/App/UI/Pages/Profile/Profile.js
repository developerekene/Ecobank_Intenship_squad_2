import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import "./Profile.css"
import NavigateButton from "../../Components/button/NavigateButton/NavigateButton";
import Button from "../../Components/button/ToggleSignupLogin/Button"
import { FaFlag } from 'react-icons/fa';
import { IoLogoYoutube, IoLogoInstagram, IoLogoGithub, IoLogoFigma } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import Input from '../../Components/input/Input';
import TextArea from '../../Components/textarea/TextArea';
import { HiX } from "react-icons/hi";
import Select from 'react-select';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navigate, useNavigate } from 'react-router-dom';



const Profile = () => {

  const [modal, setmodal] = useState(false);
  const [address, setAddress] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [skills, setSkills] = useState("");
  const [about, setAbout] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [youtube, setYoutube] = useState("");
  const [instagram, setInstagram] = useState("");
  const [github, setGithub] = useState("");
  const [figma, setFigma] = useState("");
  const toggleModal = () => {
    setmodal(!modal);
  }

  const options = [
    { value: '100level', label: 'Web Development' },
    { value: '200level', label: 'UX Design' },
    { value: '300level', label: 'UI Design' },
    { value: '400level', label: 'Data Science' },
    { value: 'a-level', label: 'Others...' },
  ]

  const [toggler, setToggler] = useState("about")
  const userDetails = document.getElementsByClassName('tab')
  const [fullname, setFullname] = useState("");
  const setActive = (e) => {
    for (let i = 0; i < userDetails.length; i++) {
      userDetails[i].classList.remove('active')
    }
    e.target.classList.add('active')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("form submitted")
  }
  const navigate = useNavigate();
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
            <div className="col-md-6" data-aos="fade-left">
              <h5 className='name'>{fullname}</h5>
              <h6 className='job'>Frontend web developer</h6>
              <p>1234 Elm Street</p>
              <p>City, State, Zip Code</p>
              <p>
                <FaFlag /> United States
              </p>
            </div>
          </div>
          <div className="col-md-2">

            {
              modal && (
                <div className="modal">

                  <div className="overlay">
                  </div>
                  <div className="modal-container">
                    <div className="close-modal" onClick={toggleModal}>
                      <HiX />
                    </div>
                    <div className="modal-content">
                      <h2>Profile Setting</h2>
                      <form style={{ width: "100%", }} onSubmit={(e) => handleSubmit()}>
                        <Input type={"text"} id={"jobTitle"} labelCont="Job Title" elementContent={jobTitle} setter={setJobTitle} />
                        <Input type={"text"} id={"address"} labelCont="Address" elementContent={address} setter={setAddress} />
                        <Input type={"text"} id={"skills"} labelCont="Skills" elementContent={skills} setter={setSkills} />
                        <TextArea labelCont={"About"} id={"about"} rows={4} cols={""} elementContent={about} setter={setAbout} />
                        <TextArea labelCont={"Education"} id={"education"} rows={4} cols={""} elementContent={education} setter={setEducation} />
                        <TextArea labelCont={"Experience"} id={"experience"} rows={4} cols={""} elementContent={experience} setter={setExperience} />
                        <Input type={"text"} id={"youtube"} labelCont="Youtube Link" elementContent={youtube} setter={setYoutube} />
                        <Input type={"text"} id={"Instagram"} labelCont="Instagram Link" elementContent={instagram} setter={setInstagram} />
                        <Input type={"text"} id={"github"} labelCont="Github Link" elementContent={github} setter={setGithub} />
                        <Input type={"text"} id={"address"} labelCont="Figma Link" elementContent={figma} setter={setFigma} />
                      </form>
                      <Button
                        type={"submit"}
                        onClick={() => {
                          toggleModal()
                        }}
                        text={"Save"} />
                    </div>
                  </div>
                </div>
              )
            }

            <Button type="submit" text={"Edit Profile"} onClick={() => toggleModal()} class="edit-profile" />
            <NavigateButton type="submit" text={"Upload CV"} class="upload-cv" />
            <Button type="button" onClick={() => { localStorage.removeItem("token"); navigate("/login") }} text={"Log Out"} />
          </div>
        </div>


        <div className="skills-container">
          <div className='skills-header'>
            <p>Skills <FaRegStar /></p>
          </div>.

          <div className='buttons'>
            <button>Web development</button>
            <button>UX Design</button>
            <button>UI Design</button>
            <button>Data science</button>
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
            <div className="profile-work" data-aos="fade-up">
              <p className='title'>WORK LINK</p>
              <div>
                <a href=' https://www.youtube.com/'><IoLogoYoutube />Youtube</a>
                <a href='https://www.instagram.com/'><IoLogoInstagram />Instagram</a>
                <a href='https://github.com/'><IoLogoGithub />Github</a>
                <a href=' https://www.figma.com/'><IoLogoFigma />Figma</a>
              </div>

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