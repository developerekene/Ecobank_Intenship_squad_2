import { useRef,useState } from "react";
import "./AccordionItem.css";
import {IoIosArrowDown} from "react-icons/io"

const AccordionItem =({ handleToggle , active, faq})=>{
    const contentEL= useRef(null);
    const {header ,id, text} =faq;

    return(
        <>
        <header
        className={active === id? "active" : ""}
        onClick={() => handleToggle(id)}
        >
            <h2>{header}</h2>
            <IoIosArrowDown />
        </header>
        <div
            ref={contentEL}
            className={'collapse ${ active === id ? "show" : "" }'}
        style={
            active === id
                ?{height: 
                    contentEL.current.scrollHeight }
                : {height: "0px" }
            }    
            >
                <p>{text}</p>
            </div>
        </>  
    );
};

export default AccordionItem

