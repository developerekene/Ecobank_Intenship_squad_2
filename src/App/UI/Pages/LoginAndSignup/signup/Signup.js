import React, { useState } from "react";
import './Signup.css'
import Button from "../../../Components/button/ToggleSignupLogin/Button";
import NavigateButton from "../../../Components/button/NavigateButton/NavigateButton"
import {AiFillGoogleCircle, AiFillApple,AiFillGithub} from 'react-icons/ai'
import {HiMiniEye, HiMiniEyeSlash} from "react-icons/hi2";
import AxiosPostRequests from "../../../../axios/AxiosPostRequests";
// import Lottie from 'react-lottie';
// import checkmarkData from '../../../../Constants/checkmark.json'

const Signup = ({onFormSwitch,toggleMessage}) =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[firstname, setFirstName] = useState("")
    const[lastname, setLastName] = useState("")
    const [viewPassword, setViewPassword]= useState(false)
    // const [message, setMessage] = useState(false)
    const [error, setError] = useState()

    // const defaultOptions = {
    //     loop: true, // Set to true if you want the animation to loop
    //     autoplay: true, // Set to true if you want the animation to play automatically
    //     animationData:checkmarkData, // The JSON animation data imported earlier
    // };
    // const toggleMessage =()=>{
    //     setMessage(!message)
    // }
    const handleResponse=(res)=>{
        if(res.status>=200&&res.status<300){
            console.log("axios: ", res)
            toggleMessage()
        }
    }
    const handleError = ( err) =>{
        setError(err);
    }
    const handleSubmit = (e) =>{
        const Base_Url = "http://localhost:8080/api/users/signup"
        e.preventDefault()
        const requestBody = {
            "firstname" : firstname,
            "lastname" : lastname,
            "email" : email,
            "password" : password
        }
         AxiosPostRequests(Base_Url,requestBody,handleResponse,handleError)
        
    }

    return(
        <>
         <div className="cover">
            <h2>SIGNUP</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">First Name</label>
                <input type="firstname" name="firstname" onChange={(e)=>setFirstName(e.target.value)}
                 value={firstname} placeholder="First Name"/>
                 <label htmlFor="lastname">Last Name</label>
                <input type="lastname" name="lastname" onChange={(e)=>setLastName(e.target.value)}
                 value={lastname} placeholder="Last Name"/>
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
                placeholder="**************"
                />
                {
                viewPassword ?
                <HiMiniEyeSlash onClick={()=>setViewPassword(false)}/>
                :
                <HiMiniEye onClick={()=>setViewPassword(true)}/>

                }
                </div>
                <p className="email-in-use">{error}</p>
                <NavigateButton text={"Signup"} type={"submit"}/>
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

        
        </>
       
    )
}
export default Signup