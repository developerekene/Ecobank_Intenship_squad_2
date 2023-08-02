import React, { useState } from "react";
import './Signup.css'
import Button from "../../../Components/button/ToggleSignupLogin/Button";
import NavigateButton from "../../../Components/button/NavigateButton/NavigateButton"
import {AiFillGoogleCircle, AiFillApple,AiFillGithub} from 'react-icons/ai'
import {HiMiniEye, HiMiniEyeSlash} from "react-icons/hi2";

const Signup = ({onFormSwitch}) =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[username, setUsername] = useState("");
    const [viewPassword, setViewPassword]= useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email)
    }

    return(
        <div className="cover">
            <h2>SIGNUP</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Full Name</label>
                <input type="username" name="username" onChange={(e)=>setUsername(e.target.value)}
                 value={username} placeholder="Full Name"/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}
                 value={email} placeholder="example@gmail.com"/>
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
                <NavigateButton text={"Signup"} type={"submit"} link="/home"/>
            </form>
            <Button onClick={()=>onFormSwitch("Login")} text={"Already have an account? Login"} />
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