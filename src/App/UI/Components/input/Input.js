import React from 'react'
import "./Input.css"

function Input({type,id,labelCont,elementContent,setter}) {
    console.log(labelCont)
  return (
    <div className='inputComp'>
        <label htmlFor="">{labelCont}</label>
        <input type={type} id={id} value={elementContent}  onChange={(e)=>setter(e.target.value)}></input>
    </div>
  )
}

export default Input
