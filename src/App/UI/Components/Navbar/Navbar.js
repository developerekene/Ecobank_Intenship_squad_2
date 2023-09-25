import React, { useEffect, useState } from 'react';
import "../Navbar/Navbar.css";
import TextApp from '../Text/Text';
import { navLinks } from '../../../Constants/data'
import { HiMenu, HiX } from "react-icons/hi";
import darkModeLogo from "../../../Image/svg/internhub-darkmode.svg"
import lightModeLogo from "../../../Image/svg/internhub-lightmode.svg"
import DarkMode from '../DarkMode-button/DarkMode';

const Navbar = () => {
  const [currentLogo, setCurrentLogo] = useState(null)

  useEffect(() => {
    if (localStorage.getItem("theme") === 'dark') {
      document.querySelector('.logo').setAttribute('src', darkModeLogo)
    }
    else {
      document.querySelector('.logo').setAttribute('src', lightModeLogo)
    }
  })
  const togglerState = (e) => {
    if (e.target.checked === true) {
      document.querySelector('.logo').setAttribute('src', darkModeLogo);
    }
    else {
      document.querySelector('.logo').setAttribute('src', lightModeLogo)
    }
  }
  const [openNav, setOpenNav] = useState(false)


  return (
    <div className='navbar'>
      <div className='nav-item-container'>
        <a href={"/"}>
          <img className='logo' 
          src={currentLogo}
          height={"45px"} alt="iLinkLogo" />
        </a>

        <div className="nav-links">
          {
            navLinks.map((item) => {
              return (
                <div className="nav-link">
                  {
                    <a href={item.href}>
                      <TextApp inputText={item.title} key={item.title} />
                    </a>
                  }
                </div>
              )
            })
          }
        </div>
        <div className='navButtons'>
            <a href={"/profile"} className={`${localStorage.getItem("dataNull") ? "required": ""}`}>
              <img className='profile-picture' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQKVgKb7G1p4Y-l2k9Vk9VSy5rVixd4D8mQ&usqp=CAU" alt='' />
            </a>
            <DarkMode togglerState ={togglerState} />
        </div>
        <div className="openIcon" onClick={() => { setOpenNav(!openNav) }}>
          <HiMenu />
        </div>

        <div className={openNav ? "open-navbar" : "close-navbar"}>
          <div className="closeIcon" onClick={() => { setOpenNav(!openNav) }}>
            <HiX />
          </div>


          {
            navLinks.map((item, index) => {
              return (
                <>
                  <a href={item.href}>
                    <TextApp inputText={item.title} key={item.title} />
                  </a>
                </>
              )
            })

          }
        </div>
      </div>
    </div>

  )
}

export default Navbar