import { HiX } from "react-icons/hi";

function Skillset({item,OnClick,customKey}) {
   
  return (
    <div> 
        <p >{item}</p>
        <HiX onClick={() => OnClick(customKey)}/>
    </div>
  )
}

export default Skillset
