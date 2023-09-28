import React, { useState } from "react";
import "./LoginAndSignup.css";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import handWave from '../../../Image/png/hand-wave.png';
import Lottie from "lottie-react";
import checkmarkData from '../../../Constants/checkmark.json'
import {MutatingDots} from "react-loader-spinner"


const LoginAndSignup = () => {
  const [currentForm, setCurrentForm] = useState("Login");
  const [message, setMessage] = useState(false)
  const [active, setActive] = useState(false)
  const [loading, setLoading] = useState(false);

  if(active){
    document.body.classList.add('active')
  }
  else{
    document.body.classList.remove('active')
  }

  const style = {
    height: 120,
    width:120
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
    <div className="LoginSignup" style={loading===true ? {overflow: 'hidden',backgroundColor:"#8282826f"} : {}}>
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
                        <Lottie loop={false} animationData={checkmarkData} style={style}/> 
                    </div>
                    <h3>Account Created successfully</h3>
                    
                    <a  className="button" href="" onClick={()=>setActive(!active)}>Go to Loginpage</a>
                    
                   
                </div>
            </div>
            :
            <></>
        }
      <div className="card"  >
        {currentForm === "Login" ? (
          // <a href="/opportunity">
            <Login onFormSwitch={toggleForm} setLoading={setLoading}/>
          // </a>
        ) : (
          <Signup onFormSwitch={toggleForm} toggleMessage={toggleMessage}/>
        )}
      </div>
        {
        loading&&
        <MutatingDots 
        height="100"
        width="100"
        color="#FF7A00"
        secondaryColor= '#FF7A00'
        radius='12'
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass="spinner"
        visible={true}
        />
       
      } 
    </div>
  )
};

export default LoginAndSignup;
