import React from "react";
import './Footer.css';
// import TextApp from "../Text/Text";


const Footer=()=>{
    return(
    <div className="Footer">
        <div className="sb__Footer section_padding">
         <div className="sb__Footer-links"> 
            <div  className="sb__Footer-links-div">
                <h4>For Business</h4> 
                <a href=""></a>
                <p> Partnership</p>

                <a href=""></a>
                <p>Advertise</p>
            </div> 

            <div className="sb__Footer-links-div">
               <h4>Company</h4>
               <a href=""></a>
               <p>Developers</p>

               <a href=""></a>
               <p>About</p> 
               
               <a href=""></a>
               <p>Contact</p>
                </div>      
         </div>

         <div className="sb__Footer-links-div">
            <h4>Partners</h4>
            <a>Ecobank Nigeria</a>
            <a>Eprocess</a>
            <a>Google</a>
         </div>

         <hr></hr>

         <div className="sb__Footer-below">
            <div className="sb__Footer-copyright">
                <p>
                    @{new Date().getFullYear()} codeInn. All right reserved
                </p>
            </div>
            <div className="sb__Footer-below-links">
                <a href><p>Privacy</p></a>
            </div>
         </div>



        </div>
    </div>
    )
}
 export default Footer;