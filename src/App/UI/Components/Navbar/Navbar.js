import React, {  useState } from 'react';
import "../Navbar/Navbar.css";
import TextApp from '../Text/Text';
import {navLinks} from '../../../Constants/data'
import { HiMenu, HiX } from "react-icons/hi";
import iLinkLogo from "../../../Image/svg/IlinkLogo-darkmode.svg"

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)
  return (
    <div className='nav-item-container'>
      <img src={iLinkLogo} height={"60px"} alt="iLinkLogo" />
      <div className="nav-links">
        {
          navLinks.map((item)=>{
            return(
              <TextApp inputText={item.title} key={item.title}/>
            )
          })
        }
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
      </div>
    </div>
  )
}

export default Navbar