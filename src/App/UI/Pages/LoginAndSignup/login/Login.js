import React, { useState } from "react";
import NavigateButton from "../../../Components/button/NavigateButton/NavigateButton";
import Button from "../../../Components/button/ToggleSignupLogin/Button";
import "./Login.css";
import { AiFillGoogleCircle, AiFillApple, AiFillGithub } from "react-icons/ai";
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";
import handleLogin from "../../../Components/loginbackend/loginlink";
import AxiosPostRequests from "../../../../axios/AxiosPostRequests";


const Login = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const [error, setError] = useState('')

  const handleResponse = (response) => {
    console.log("Response:", response);
  };
  
  const handleError = (error) => {
    setError(error)
  };

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const handleClick = (e) => {
    e.preventDefault();
    if(!emailRegex.test(email)){
      document.getElementById('emailErr').innerText='invalid Email'
    }
    const Base_Url = "http://localhost:8080/api/login";
    const requestBody = {
      email: email,
      password: password,
    };
    handleLogin(Base_Url, requestBody);
    AxiosPostRequests(Base_Url, requestBody, handleResponse, handleError);
  };

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
          value={email}
          placeholder="example@gmail.com"
        />
        <p id='emailErr'></p>

        <label htmlFor="password">Password</label>
        <div>
          <input
            type={viewPassword ? "text" : "password"}
            name="password"
            onChange={(e)=>{setPassword(e.target.value)}}
            value={password}
            placeholder="*****"
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
