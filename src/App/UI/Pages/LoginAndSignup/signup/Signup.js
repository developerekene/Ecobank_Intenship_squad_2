import React, { useState } from "react";
import './Signup.css'
import Button from "../../../Components/button/Button";
import {AiFillGoogleCircle, AiFillApple,AiFillGithub} from 'react-icons/ai'

const Signup = ({onFormSwitch}) =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[username, setUsername] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email)
    }

    return(
        <div className="cover">
            <h2>SIGNUP</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="username" name="username" onChange={(e)=>setUsername(e.target.value)}
                 value={username} placeholder="example@gmail.com"/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}
                 value={email} placeholder="example@gmail.com"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}
                 value={password} placeholder="*****"/>
                <Button text={"Signup"} type={"submit"}/>
            </form>
            <Button onClick={()=>onFormSwitch("Login")} text={"Don't have an Account? Signup"} />
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
export default Signup