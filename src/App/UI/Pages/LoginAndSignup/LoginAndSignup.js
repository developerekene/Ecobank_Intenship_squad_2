import React, { useState } from 'react';
import Signup from "./signup/Signup";
import Login from './login/Login';
import Navbar from '../../Components/Navbar/Navbar';

const LoginAndSignup = () => {
  const [currentForm, setCurrentForm] = useState("Login");

  const toggleForm =(formName)=>{
    setCurrentForm(formName)
  }
  return (
    <div className='LoginSignup'>
      <Navbar />
        <div className='cover'>
          {
            currentForm==="Login"?<Login onFormSwitch={toggleForm}/>:
            <Signup onFormSwitch={toggleForm} />
          }
          
        </div>
    </div>
    

  )
}

export default LoginAndSignup