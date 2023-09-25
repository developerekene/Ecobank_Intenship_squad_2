import React from "react";
import "./NavigateButton.css";
import { useNavigate } from "react-router-dom";

function Button({text, type, link, Class}) {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(link)} type={type} className={`button ${Class}`}>
        {text}
      </button>
    </div>
  );
}

export default Button;
