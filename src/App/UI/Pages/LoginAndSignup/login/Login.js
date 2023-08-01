import React, { useState } from "react";
import Button from "../../../Components/button/Button";
import "./Login.css"
import {AiFillGoogleCircle, AiFillApple,AiFillGithub} from 'react-icons/ai'

const Login = ({onFormSwitch}) =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = (e) =>{
        e.preventDefault()
        console.log(email)
    }

    return(
        <div className="cover">
            <h2>LOGIN</h2>
            <form onSubmit={handleClick}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}
                 value={email} placeholder="example@gmail.com"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}
                 value={password} placeholder="*****"/>
                <Button text={"Login"} type={"submit"} />
            </form>
            <Button onClick={()=> onFormSwitch("Signup")} text={"Don't have an Account? Signup"} />
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
        
    )
}

export default Login;