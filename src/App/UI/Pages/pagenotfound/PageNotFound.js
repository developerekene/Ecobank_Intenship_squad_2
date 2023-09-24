import React from 'react'
import notfound from "../../../Image/svg/NotFound.svg"
import Button from '../../Components/button/NavigateButton/NavigateButton'

function PageNotFound() {
  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <img src={notfound} alt="" height={600} width={600}/>
      <Button link={"/"} text={"Go back home"}/>
    </div>
  )
}

export default PageNotFound
