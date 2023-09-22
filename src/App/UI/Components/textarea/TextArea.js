import React from 'react'
import './TextArea.css'

function TextArea({labelCont,id,rows,cols,elementContent,setter}) {
  return (
    <div className='textAreaComp'>
      <label htmlFor="">{labelCont}</label>
      <textarea id={id} cols={cols} rows={rows} value={elementContent} onChange={(e)=>{setter(e.target.value)}} ></textarea>
    </div>
  )
}

export default TextArea
