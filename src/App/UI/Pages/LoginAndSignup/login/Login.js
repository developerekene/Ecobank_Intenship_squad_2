import React, { useState } from "react";
import NavigateButton from "../../../Components/button/NavigateButton/NavigateButton"
import Button from "../../../Components/button/ToggleSignupLogin/Button";
import "./Login.css";
import { AiFillGoogleCircle, AiFillApple, AiFillGithub } from "react-icons/ai";
import {HiMiniEye, HiMiniEyeSlash} from "react-icons/hi2";
import loginlink from "../../../Components/loginbackend/loginlink";
import handleLogin from "../../../Components/loginbackend/loginlink";

const Login = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword]= useState(false)
  
  const handleClick = (e) => {
    e.preventDefault();
   const  Base_Url = 'http://localhost:8080/api/login'
   const requestBody = {
      email:email,
      password:password,
    }
    handleLogin(Base_Url,requestBody)
  };
 
  return (
    <div className="cover">
      <h2>LOGIN</h2>
      <form onSubmit={handleClick}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="example@gmail.com"
        />
        <label htmlFor="password">Password</label>
        <div>
          <input
          type={viewPassword?"text":"password" }
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="*****"
        />
         {
          viewPassword ?
          <HiMiniEyeSlash onClick={()=>setViewPassword(false)}/>
          :
          <HiMiniEye onClick={()=>setViewPassword(true)}/>

         }
        </div>
        
        {/* <a href="/opportunity"> */}
          <NavigateButton text={"Login"} type={"submit"} link={"/home"}/>
        {/* </a> */}
      </form>
      <Button
        onClick={() => onFormSwitch("Signup")}
        text={"Don't have an Account? Signup"}
      />
      <div className="social-networks">
        <div>
          <AiFillGoogleCircle />
        </div>
        <div>
          <AiFillApple />
        </div>
        <div>
          <AiFillGithub />
        </div>
      </div>
    </div>
  );
};

export default Login;
