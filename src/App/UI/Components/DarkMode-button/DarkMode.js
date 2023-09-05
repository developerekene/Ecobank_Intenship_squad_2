import React, { useEffect, useState } from "react";
import { ReactComponent as Sun } from "../../../Image/svg/Sun.svg";
import { ReactComponent as Moon } from "../../../Image/svg/Moon.svg";
import "./DarkMode.css";
import { Assets } from "../../../Constants/Assets";
import darkModeLogo from "../../../Image/svg/internhub-darkmode.svg"
import lightModeLogo from "../../../Image/svg/internhub-lightmode.svg"

const DarkMode = ({togglerState}) => {

    useEffect(()=>{
      const toggler = document.querySelector('#darkmode-toggle')
      if(localStorage.getItem('theme')==='dark'){
        toggler.checked = true
      }
      else{
        toggler.checked = false
      }
    })
  
    const toggleTheme = (e) => {
        const currentTheme = document.body.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        document.body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        togglerState(e)
      };
      
      const initializeTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
          document.body.setAttribute("data-theme", savedTheme); 
        
        } else {
          // Default to light mode if no theme preference is set
          document.body.setAttribute("data-theme", "light");

        }
        
      };
      initializeTheme();

      
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange= {(e)=>toggleTheme(e)}
            />
            <label className='dark_mode_label' id="toggle" htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
