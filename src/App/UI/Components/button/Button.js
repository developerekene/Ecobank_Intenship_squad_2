import React from "react";
import './Button.css';


function Button(props) {
    return (
        <div>
            <button onClick={props.onClick} type={props.type} className="button">{props.text}</button>
        </div>
    )
}

export default Button;
