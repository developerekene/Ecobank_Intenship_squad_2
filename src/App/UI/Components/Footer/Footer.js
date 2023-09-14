/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import React from "react";
import './Footer.css';
import { footerLinks } from "../../../Constants/data";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__Footer section_padding">

        <div className="sb__Footer-links-div">
          {
            footerLinks.map((item) => (
              <div className="sb__Footer-link-div">
                <h4>{item.header}</h4>
                <div>
                  {
                    item.links.map((el, id) => (
                      <a href={el.href} key={id}>
                        {el.icon ?
                          <div className="footer_display">
                            {el.icon}
                            {el.link}
                          </div> : el.link}
                      </a>))
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
              @{new Date().getFullYear()} INTERNHUB. All right reserved
            </p>
          </div>
        </div>



      </div>
    </div>
  )
}
export default Footer;