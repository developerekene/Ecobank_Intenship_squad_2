import React, { useEffect, useState } from "react";
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
    const [error, setError] = useState()

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
        e.preventDefault()
        let isValid = true;
        // Check email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            isValid=false;
            document.getElementById("emailVal").innerText="Invalid email address";
        }
        if (password.length < 8) {
            isValid = false;
            document.getElementById("passVal").innerText="Password must be at least 8 characters long";
        }
        if(isValid===true){
            e.preventDefault()
            const Base_Url = "http://localhost:8080/api/users/signup"
            
            const requestBody = {
                "firstname" : firstname,
                "lastname" : lastname,
                "email" : email,
                "password" : password
            }
            AxiosPostRequests(Base_Url,requestBody,handleResponse,handleError)
        }
        if (firstname==="") {
            document.getElementById("fnameVal").innerText="cannot be empty";
        }
        if (lastname==="") {
            document.getElementById("lnameVal").innerText="cannot be empty";
        }
        
    };
    useEffect(()=>{
        document.getElementById("emailInput").addEventListener("keypress",()=>{
          document.getElementById('emailVal').innerText=''
          
        })
        document.getElementById("passInput").addEventListener("keydown",()=>{
            document.getElementById('passVal').innerText=''
            
          })
        document.getElementById("fnameInput").addEventListener("keydown",()=>{
        document.getElementById('fnameVal').innerText=''
        
        })
        document.getElementById("lnameInput").addEventListener("keydown",()=>{
            document.getElementById('lnameVal').innerText=''
            
          })
      },[])

    return(
        <>
         <div className="cover">
            <h2>SIGNUP</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">First Name</label>
                <input type="firstname" 
                name="firstname" 
                onChange={(e)=>{setFirstName(e.target.value)}}
                id="fnameInput"
                value={firstname}/>
                 <p id="fnameVal" className="Error-Message"></p>
                 <label htmlFor="lastname">Last Name</label>
                <input 
                type="lastname" 
                id="lnameInput" 
                name="lastname" 
                onChange={(e)=>{setLastName(e.target.value)}}
                value={lastname} />
                 <p id="lnameVal" className="Error-Message"></p>
                <label htmlFor="email">Email</label>
                <input 
                name="email" 
                id="emailInput" 
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                 value={email}/>
                 <p id="emailVal">{error}</p>
                <label htmlFor="password">Password</label>
                <div>
                <input
                type={viewPassword?"text":"password" }
                name="password"
                id="passInput"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                
                />
                <p id="passVal"></p>
                {
                viewPassword ?
                <HiMiniEyeSlash onClick={()=>setViewPassword(false)}/>
                :
                <HiMiniEye onClick={()=>setViewPassword(true)}/>

                }
                </div>
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