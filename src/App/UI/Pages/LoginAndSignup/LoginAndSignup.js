import React, { useState } from "react";
import "./LoginAndSignup.css";
import { Assets } from '../../../Constants/Assets';
import Signup from "./signup/Signup";
import Login from "./login/Login";
import handWave from '../../../Image/png/hand-wave.png';

const LoginAndSignup = () => {
  const [currentForm, setCurrentForm] = useState("Login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="LoginSignup">
      <div className="Welcome-Users-Text">
          <img src={handWave} className="wave-emoji" alt="wave emoji" width={"250px"} />
          <h3>Welcome!
          </h3>
          <p>Login or Signup to see opportunities that are available for you</p>
      </div>
      <div className="card">
        {currentForm === "Login" ? (
          // <a href="/opportunity">
            <Login onFormSwitch={toggleForm} />
          // </a>
        ) : (
          <Signup onFormSwitch={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default LoginAndSignup;
