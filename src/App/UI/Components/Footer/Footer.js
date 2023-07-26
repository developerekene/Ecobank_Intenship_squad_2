/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import React from "react";
import './Footer.css';
import {footerLinks} from "../../../Constants/data"
// import TextApp from "../Text/Text";


const Footer=()=>{
    return(
    <footer className="Footer">
        <div className="sb__Footer section_padding">
  
         <div className="sb__Footer-links-div">
          {
            footerLinks.map((item)=>(
              <div className="sb__Footer-link-div">
                <h4>{item.header}</h4>
                <div>
                  {
                  item.links.map((el)=>(<a href="#" >{el.link}</a>))
                  }
                </div>
              </div>
            )) 
          }
         </div>

         <hr></hr>

         <div className="sb__Footer-below">
            <div className="sb__Footer-copyright">
                <p>
                    @{new Date().getFullYear()} ilink. All right reserved
                </p>
            </div>
         </div>



        </div>
    </footer>
    )
}
 export default Footer;