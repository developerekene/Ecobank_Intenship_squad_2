import React, { useEffect, useState } from 'react'
import "./Input.css"

function Input({type,id,labelCont,elementContent,setter, Confirm,handleskillList,Skillset}) {

  const [skillList, setSkillList] = useState([]);

  useEffect(()=>{
    setSkillList(Skillset)
  },[Skillset])

  const handleSkillSet = (value) => {
    setSkillList((prevSkills) => {
      if (Array.isArray(prevSkills)) {
        return [...prevSkills, value];
      } else {
        // If prevSkills is not an array, initialize a new array with the new value.
        return [value];
      }
    });
    handleskillList((prevSkills) => {
      if (Array.isArray(prevSkills)) {
        return [...prevSkills, value];
      } else {
        // If prevSkills is not an array, initialize a new array with the new value.
        return [value];
      }
    });
    setter("");
  };
  return (
    <div className='inputComp'>
        <label htmlFor="">{labelCont}</label>
        <div className='diplayFlex'>
        <input type={type} id={id} value={elementContent}  onChange={(e)=>setter(e.target.value)}></input>
        {Confirm&& <Confirm onClick={()=>{handleSkillSet(elementContent)}}/>}
        </div>
    </div>
  )
}

export default Input
