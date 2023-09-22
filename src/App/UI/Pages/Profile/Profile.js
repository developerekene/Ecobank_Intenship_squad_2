import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import "./Profile.css"
import Button from "../../Components/button/NavigateButton/NavigateButton";
import { FaFlag } from 'react-icons/fa';
import { IoLogoYoutube, IoLogoInstagram, IoLogoGithub, IoLogoFigma } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import Input from '../../Components/input/Input';
import TextArea from '../../Components/textarea/TextArea';
// import Modal from '../../Components/Modal/Modal';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import { IoLocationSharp } from "react-icons/io5";
// import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
// import { FcAbout } from "react-icons/fc";
// import { CiViewTimeline } from "react-icons/ci";
// import { IoLink } from "react-icons/io5";


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

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };


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
            <div className="col-md-6" data-aos="fade-left">
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
            <Button type="submit" text={"Upload CV"} class="upload-cv" />
            <Button type="button" text={"Log Out"} class="log-out" />

            {
              modal && (
                <div className="modal">

                  <div className="overlay">
                  </div>
                  <div className="modal-container">
                    <div className="modal-content">
                      <h2>Profile Setting</h2>
                      <form style={{ width: "100%", }}>
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
                      <OnClick
                        type={"text"}
                        onClick={() => {
                          handleSubmit();
                          toggleModal()
                        }}
                        text={"Save"} />
                    </div>
                  </div>
                </div>
              )
            }
            {/* <div>
              <button onClick={openModal}>Edit Profile</button>
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className='header'>
                  <div className='text'>Edit Profile</div>
                  <div className='underline'></div>
                </div>
                <div className='imageChange'>
                  <p></p>
                </div>
                <div className='name'>
                  <MdOutlineDriveFileRenameOutline />
                  <textarea id="workLink" name="workLink" rows="2"></textarea>
                </div>
                <div className='address'>
                  <IoLocationSharp />
                  <textarea id="workLink" name="workLink" rows="2"></textarea>
                </div>
                <div className='skills'>
                  <FaRegStar />
                  <select type="level" name="level">
                    <option value="100level">100 Level</option>
                    <option value="200level">200 Level</option>
                    <option value="300level">300 Level</option>
                    <option value="400level">400 Level</option>
                    <option value="a'level">A'Level</option>
                  </select>
                </div>
                <div className='aboutTimeline'>
                  <div className='about'>
                    <FcAbout />
                    <textarea id="workLink" name="workLink" rows="3"></textarea>
                  </div>
                  <div className='timeline'>
                    <CiViewTimeline />
                    <textarea id="workLink" name="workLink" rows="3"></textarea>
                  </div>
                </div>
                <div className='workLink'>
                  <IoLink />
                  <textarea id="workLink" name="workLink" rows="3"></textarea>
                </div>
                <div className='buttons'>
                  <button className='cancel' onClick={closeModal}>Cancel</button>
                  <button className='contin'>Update</button>
                </div>
              </Modal>
            </div> */}


          </div>
        </div>


        <div className="skills-container">
          <div className='skills-header'>
            <p>Skills <FaRegStar /></p>
          </div>.

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
            <div className="profile-work" data-aos="fade-up">
              <p className='title'>WORK LINK</p>
              <a href=' https://www.youtube.com/'><IoLogoYoutube />Youtube</a> <br />
              <a href='https://www.instagram.com/'><IoLogoInstagram />Instagram</a> <br />
              <a href='https://github.com/'><IoLogoGithub />Github</a> <br />
              <a href=' https://www.figma.com/'><IoLogoFigma />Figma</a> <br />
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