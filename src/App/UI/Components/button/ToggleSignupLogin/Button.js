import React from 'react'

function Button({type,onClick,text,Class}) {
  return (
    <div>
      <button onClick={onClick} type={type} className={`button ${Class}`}>
        {text}
      </button>
    </div>
  )
}

export default Button
