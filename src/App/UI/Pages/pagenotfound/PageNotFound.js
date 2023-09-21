import React from 'react'
import notfound from "../../../Image/svg/NotFound.svg"

function PageNotFound() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <img src={notfound} alt="" height={600} width={600}/>
    </div>
  )
}

export default PageNotFound
