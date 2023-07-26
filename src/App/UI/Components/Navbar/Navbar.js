import React, {  useState } from 'react';
import "../Navbar/Navbar.css";
import TextApp from '../Text/Text';
import {navLinks,navButton} from '../../../Constants/data'
import { HiMenu, HiX } from "react-icons/hi";
import { Assets } from '../../../Constants/Assets';
import Button from "../button/Button"

const Navbar = () => {
  
  const [openNav, setOpenNav] = useState(false)
  return (
    <div className='nav-item-container'>
      <img src={Assets.images['logo-lightmode']} height={"60px"} alt="iLinkLogo" />
      <div className="nav-links">
        {
          navLinks.map((item)=>{
            return(
              <div className='nav-link'>
                {
                <TextApp inputText={item.title} key={item.title}/>
                }
              </div>
              
            )
          })
        }
        <div className='navButtons'>
          {
            navButton.map((item)=>(
              <Button text={item.title}/>
            ))
          }
        </div>
      </div>

      <div className={!openNav? "openIcon" : "closeIcon"} onClick={()=>{setOpenNav(!openNav)}}>
        { !openNav ? <HiMenu /> : <HiX />}
      </div>
      <div className={openNav ? "open-navbar" : "close-navbar"}>
        {
          navLinks.map((item)=>{
            return(
              <TextApp inputText={item.title} key={item.title}/>
            )
          })
        } 
        <div className='navButtons'>
          {
            navButton.map((item)=>(
              <Button text={item.title}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar