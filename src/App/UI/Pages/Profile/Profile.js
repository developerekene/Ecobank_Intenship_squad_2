import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import "./Profile.css"
import NavigateButton from "../../Components/button/NavigateButton/NavigateButton";
import Button from "../../Components/button/ToggleSignupLogin/Button"
import { IoLogoYoutube, IoLogoInstagram, IoLogoGithub, IoLogoFigma } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import Input from '../../Components/input/Input';
import TextArea from '../../Components/textarea/TextArea';
import { HiX } from "react-icons/hi";
import {FcAbout} from "react-icons/fc"
import {IoMdAddCircle} from "react-icons/io"
import { Navigate, useNavigate } from 'react-router-dom';
import Skills from '../../Components/skills/Skills';
import Timelinecontent from './Timelinecontent';
import {BsCheckSquareFill} from 'react-icons/bs'
import AxiosPostRequests from "../../../axios/AxiosPostRequests"

import AOS from 'aos';
import 'aos/dist/aos.css';
import Skillset from './Skillset';


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

  const [toggler, setToggler] = useState("about")
  const userDetails = document.getElementsByClassName('tab')
  // const [updateData,setUpdateData] = useState({})
  const [skillSet, setSkillSet] =useState([]);

  const [profileData, setProfileData] = useState(() => {
    // Retrieve profile data from localStorage on component mount
    const storedData = localStorage.getItem('profileData');
    return storedData ? JSON.parse(storedData) : {};
  });


  const setActive = (e) => {
    for (let i = 0; i < userDetails.length; i++) {
      userDetails[i].classList.remove('active')
    }
    e.target.classList.add('active')
  }

 

  const navigate = useNavigate();
  // useEffect(()=>{
  //   localStorage.setItem("profileData",JSON.stringify(localStorage.getItem(updateData)))
  // },[updateData])

  const handleResponse=(res)=>{
    if(res.status>=200&&res.status<300){
        const profilieData = res.data.profileData;
        const updatedData = { ...profileData, ...profilieData };
        setProfileData(updatedData);
        
        localStorage.setItem('profileData', JSON.stringify(updatedData));
        
    }
    
}
const handleError = ( err) =>{
    console.log(err)
}
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("form submitted")
    profileData.jobTitle = jobTitle;
    profileData.address = address;
    profileData.skills = skillSet;
    profileData.about=about;
    profileData.education = education;
    profileData.experience = experience;
    profileData.youtube =youtube;
    profileData.instagram = instagram;
    profileData.github= github;
    profileData.figma = figma;
    const Base_Url = "http://localhost:8080/api/users/profile/update"
    const requestBody = profileData
    AxiosPostRequests(Base_Url,requestBody,handleResponse,handleError)
    toggleModal();
   
  }
  const editProfile =()=>{
    toggleModal();
    setJobTitle(profileData.jobTitle)
    setAddress(profileData.address)
    setSkillSet(profileData.skills)
    setAbout(profileData.about)
    setEducation(profileData.education)
    setExperience(profileData.experience)
    setYoutube(profileData.youtube)
    setInstagram(profileData.instagram)
    setGithub(profileData.github)
    setFigma(profileData.figma)
   //Make Axios Request
  }
  useEffect(() => {
    AOS.init();
    let dataNull = "false"; // Initialize as "false"
    
    for (const el in profileData) {
      if ((profileData[el] === null||profileData[el]==="")&& el !== "id") {
        dataNull = "true"; // Set to "true" if any property is null
        break; // Exit the loop since you've already found a null property
      }
    }
    
    localStorage.setItem("dataNull", dataNull);
  }, [profileData,handleSubmit]);

  console.log(localStorage.getItem("dataNull"))
 
  const handleskillList =(list)=>{
    setSkillSet(list);
  }
  const handleDeleteSkill =(id)=>{
    console.log(skillSet)
    setSkillSet(skillSet.filter((item, index) => index !== id))
  }

  console.log("profileData.skills:", profileData.skills)
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
              <h5 className='name'>{profileData.fullname}</h5>
              <h6 className='job'><i>{profileData.jobTitle!==null&& profileData.jobTitle !== "" ? profileData.jobTitle : "Job title not set"}</i></h6>
              <p className='address'>
              <i>{profileData.address !== null && profileData.address !== "" ? profileData.address : "Address not set"}</i>
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <Button text={"Edit Profile"} id={"editProfile"} onClick={() => {editProfile()}} Class={`${localStorage.getItem("dataNull")==="true" ? "shakeButton" : ""} `} />
            <NavigateButton text={"Upload CV"} class="upload-cv" />
            <Button type="button" onClick={()=>{
              localStorage.removeItem("token"); 
            navigate("/login")}} text={"Log Out"}/>
          </div>
        </div>


        <div className="skills-container">
          <div className='skills-header'>
            <p>Skills <FaRegStar /></p>
          </div>.

          <div className='buttons'>
            {
              (profileData.skills !== null && profileData.skills.length > 0) ?
                profileData.skills.map((skill, id) => (
                  <Skills skill={skill} key={id} />
                ))
                :
                <em style={{ color: "var(--primary-color)" }}>Skills not set</em>
            }
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
                  {
                    profileData.about!==null&&profileData.about!==""?
                    <p>{profileData.about}</p>
                    :
                    <div>
                      <FcAbout />
                      <h4>Tell companies about you</h4>
                    </div>
                  }
                  
                </div>
                :
                <div className='timeline-container'>
                  <div className='Education-section'>
                    <h3>Education</h3>
                    {
                      profileData.education !==null&& profileData.education!==""?
                    
                      <Timelinecontent content={education}/>
                      
                      :
                      <div className='addTimeline'>
                        <IoMdAddCircle />
                        <span>Let Companies know about your education</span>
                      </div>
                    }
                  </div>

                  <div className='Experience-section'>
                    <h3>Experience</h3>
                    {
                      profileData.experience !==null&& profileData.experience!==""?
                      <Timelinecontent content={experience} />
                      :
                      <div className='addTimeline'> 
                        <IoMdAddCircle />
                        <p>Let Companies know about your Experience</p>
                      </div>
                    }

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
                {profileData.youtube && <a target="_blank" href=' https://www.youtube.com/'><IoLogoYoutube />Youtube</a>}
               { profileData.instagram && <a target="_blank" href='https://www.instagram.com/'><IoLogoInstagram />Instagram</a> }
                {profileData.github && <a target="_blank" href='https://github.com/'><IoLogoGithub />Github</a> }
                {profileData.figma && <a target="_blank" href=' https://www.figma.com/'><IoLogoFigma />Figma</a> }
              </div>

            </div>
          </div>
          {/* right side url */}
        </div>
      </div>
      {
              modal && (
                <div className="modal profileModal">

                  <div className="overlay">
                  </div>
                  <div className="modal-container">
                    <div className="close-modal" onClick={toggleModal}>
                      <HiX />
                    </div>
                    <div className="modal-content">
                      <h2>Profile Setting</h2>
                      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                      <Input type={"text"} id={"jobTitle"} labelCont="Job Title" elementContent={jobTitle} setter={setJobTitle} />
                      <Input type={"text"} id={"address"} labelCont="Address" elementContent={address} setter={setAddress} />
                      <Input type={"text"} id={"skills"} labelCont="Skills" elementContent={skills} setter={setSkills}
                       Confirm={BsCheckSquareFill} handleskillList={handleskillList} Skillset ={skillSet}/>
                      <div className='skillset'>
                        {
                          skillSet && 
                          skillSet.map((item,id)=>(
                            <Skillset item={item} key={id} customKey={id} OnClick={handleDeleteSkill}/>
                          ))
                          
                        }
                      </div>
                      <TextArea labelCont={"About"} id={"about"} rows={4} cols={""} elementContent={about} setter={setAbout} />
                      <TextArea labelCont={"Education"} id={"education"} rows={4} cols={""} elementContent={education} setter={setEducation} />
                      <TextArea labelCont={"Experience"} id={"experience"} rows={4} elementContent={experience} setter={setExperience} />
                      <Input type={"text"} id={"youtube"} labelCont="Youtube Link" elementContent={youtube} setter={setYoutube} />
                      <Input type={"text"} id={"instagram"} labelCont="Instagram Link" elementContent={instagram} setter={setInstagram} />
                      <Input type={"text"} id={"github"} labelCont="Github Link" elementContent={github} setter={setGithub} />
                      <Input type={"text"} id={"figma"} labelCont="Figma Link" elementContent={figma} setter={setFigma} />
                      <button className='profileSubmit' type='submit'>Save</button>
                    </form>
                      
                    </div>
                  </div>
                </div>
              )
            }
      <Footer />
    </>

  )
}



export default Profile