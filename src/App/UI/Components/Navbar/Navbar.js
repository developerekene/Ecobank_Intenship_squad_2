import React, { useState } from 'react';
import "../Navbar/Navbar.css";
import TextApp from '../Text/Text';
import { navLinks } from '../../../Constants/data'
import { HiMenu, HiX } from "react-icons/hi";
import { Assets } from '../../../Constants/Assets';
import Button from "../button/NavigateButton/NavigateButton"

const Navbar = () => {

  const [openNav, setOpenNav] = useState(false)
  const [loggedIn, setloggedIn] = useState(true)



  return (
    <div className='navbar'>
      <div className='nav-item-container'>
        <a href={"/home"}>
          <img src={Assets.images['logo-lightmode']} height={"60px"} alt="iLinkLogo" />
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
          
          {

            loggedIn ?
              <>
                <a href={"/profile"}>
                  <img className='profile-picture' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQKVgKb7G1p4Y-l2k9Vk9VSy5rVixd4D8mQ&usqp=CAU" alt='' />
                </a>
              </>

              :
              <Button text={'Login'} />
          }

        </div>

        <div className="openIcon" onClick={() => { setOpenNav(!openNav) }}>
          <HiMenu />
        </div>
        <div className={openNav ? "open-navbar" : "close-navbar"}>
          <div className="closeIcon" onClick={() => { setOpenNav(!openNav) }}>
            <HiX />
          </div>

          {
            navLinks.map((item) => {
              return (
                <>
                  <a href={item.href}>
                    <TextApp inputText={item.title} key={item.title} />
                  </a>
                </>

              )
            })
          }
          <div className='navButtons-side'>
            <Button text={'Login'} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar