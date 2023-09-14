import React, { useState } from "react";
import "./LoginAndSignup.css";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import handWave from '../../../Image/png/hand-wave.png';
import Lottie from 'react-lottie';
import checkmarkData from '../../../Constants/checkmark.json'

const LoginAndSignup = () => {
  const [currentForm, setCurrentForm] = useState("Login");
  const [message, setMessage] = useState(false)
  const [active, setActive] = useState(false)

  if(active){
    document.body.classList.add('active')
  }
  else{
    document.body.classList.remove('active')
  }

  const defaultOptions = {
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true if you want the animation to play automatically
    animationData:checkmarkData, // The JSON animation data imported earlier
  };
  const toggleMessage =()=>{
    setMessage(!message)
    setActive(!active)
}

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  // const closeMessage = ()=>{
  //   setActive(!active)
  //   setMessage(!message)
  // }
  return (
    <div className="LoginSignup">
      <div className="Welcome-Users-Text">
          <img src={handWave} className="wave-emoji" alt="wave emoji" width={"250px"} />
          <h3>Welcome!
          </h3>
          <p>Login or Signup to see opportunities that are available for you</p>
      </div>
      {
            message ? 
            <div className="overlay-message">
                <div className="message">
                    <div>
                        <Lottie options={defaultOptions} height={50} width={50} /> 
                    </div>
                    <h3>Account Created successfully</h3>
                    
                    <a  className="button" href="" onClick={()=>setActive(!active)}>Go to Loginpage</a>
                    
                   
                </div>
            </div>
            :
            <></>
        }
      <div className="card">
        {currentForm === "Login" ? (
          // <a href="/opportunity">
            <Login onFormSwitch={toggleForm} />
          // </a>
        ) : (
          <Signup onFormSwitch={toggleForm} toggleMessage={toggleMessage}/>
        )}
      </div>
    </div>
  );
};

export default LoginAndSignup;
