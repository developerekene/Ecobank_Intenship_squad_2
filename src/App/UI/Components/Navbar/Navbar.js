import React, {  useState } from 'react';
import "../Navbar/Navbar.css";
import TextApp from '../Text/Text';
import {navLinks} from '../../../Constants/data'
import { HiMenu, HiX } from "react-icons/hi";
import { Assets } from '../../../Constants/Assets';
import Button from "../button/Button"
import Andres from "../../../Image/png/Andres.png"

const Navbar = () => {
  
  const [openNav, setOpenNav] = useState(false)
  return (
    <div className='navbar'>
        <div className='nav-item-container'>
        <img src={Assets.images['logo-lightmode']} height={"60px"} alt="iLinkLogo" />
        <div className="nav-links">
        <div className='nav-right-elements'>
              {
                navLinks.map((item)=>{
                  return(
                    <div className="nav-link">
                      {
                        <TextApp inputText={item.title} key={item.title}/>
                      }
                      </div>
                  )
                })
              }
          </div>
          <div className='navButtons'>
            <Button text={'Login'} />
            <img className='profile-picture' src={Andres} alt="profile" />
          </div>
        </div>

        <div className="openIcon" onClick={()=>{setOpenNav(!openNav)}}>
          <HiMenu />
        </div>
        <div className={openNav ? "open-navbar" : "close-navbar"}>
        <div className="closeIcon" onClick={()=>{setOpenNav(!openNav)}}>
           <HiX />
        </div>
        
          {
            navLinks.map((item)=>{
              return(
                <TextApp inputText={item.title} key={item.title}/>
              )
            })
          } 
          <div className='navButtons'>
            <Button text={'Login'} />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar