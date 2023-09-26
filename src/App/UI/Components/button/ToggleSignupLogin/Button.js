import React from 'react'

function Button({onClick,text,Class,id}) {

  return (
    <div>
      <button onClick={onClick} id={id} className={`button ${Class}`}>
        {text}
      </button>
    </div>
  )
}

export default Button
