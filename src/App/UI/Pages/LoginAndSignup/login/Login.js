import React, { useEffect, useState } from "react";
import NavigateButton from "../../../Components/button/NavigateButton/NavigateButton";
import Button from "../../../Components/button/ToggleSignupLogin/Button";
import "./Login.css";
import { AiFillGoogleCircle, AiFillApple, AiFillGithub } from "react-icons/ai";
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";
import AxiosPostRequests from "../../../../axios/AxiosPostRequests";
import { useNavigate } from 'react-router-dom';


const Login = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const [error, setError] = useState('')


  const navigate = useNavigate();
  //This function handles response from API
  const handleResponse = (response) => {
    const token = response.data.token;
    localStorage.setItem("token",token);
    console.log(localStorage.getItem("token"))
    navigate("/")
  }
  //This function handles Error from API
  const handleError = (error) => {
    setError(error)
  };

  //This function handles Form submit
  const handleClick = (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if(!emailRegex.test(email)){
      document.getElementById('emailErr').innerText='invalid Email'
    }
    else{
      const Base_Url = "http://localhost:8080/api/login";
      const requestBody = {
        email: email,
        password: password,
      };
      AxiosPostRequests(Base_Url, requestBody, handleResponse, handleError);
    }
    
  };
  useEffect(()=>{
    document.getElementById("emailInput").addEventListener("keypress",()=>{
      document.getElementById('emailErr').innerText=''
      
    })
    // document.getElementById('passwordInput').addEventListener("keypress",()=>{
    //   document.getElementById("AuthErr").innerText=""
    // })
  },[])
  return (
    <div className="cover">
      <h2>LOGIN</h2>
      <form onSubmit={handleClick}>
        {error&&<p id='AuthErr'>{error}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e)=>{setEmail(e.target.value)}}
          id="emailInput"
          value={email}
        />
        <p id='emailErr' className="email-Err"></p>

        <label htmlFor="password">Password</label>
        <div>
          <input
            type={viewPassword ? "text" : "password"}
            name="password"
            onChange={(e)=>{setPassword(e.target.value)}}
            value={password}
            id="passwordInput"
          />
          {viewPassword ? (
            <HiMiniEyeSlash onClick={() => setViewPassword(false)} />
          ) : (
            <HiMiniEye onClick={() => setViewPassword(true)} />
          )}
        </div>

        <NavigateButton text={"Login"} type={"submit"} />
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
