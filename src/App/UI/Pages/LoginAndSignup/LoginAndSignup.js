import React, { useState } from 'react';
import './LoginAndSignup.css'
import Signup from "./signup/Signup";
import Login from './login/Login';


const LoginAndSignup = () => {
  const [currentForm, setCurrentForm] = useState("Login");

  const toggleForm =(formName)=>{
    setCurrentForm(formName)
  }
  return (
    <div className='LoginSignup'>
        <div className='card'>
          {
            currentForm==="Login"?<Login onFormSwitch={toggleForm}/>:
            <Signup onFormSwitch={toggleForm} />
          }
          
        </div>
    </div>
    

  )
}

export default LoginAndSignup