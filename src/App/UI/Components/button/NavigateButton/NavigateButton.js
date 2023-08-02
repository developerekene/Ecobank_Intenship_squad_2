import React from "react";
import "./NavigateButton.css";
import { useNavigate } from "react-router-dom";

function Button({text, type, link}) {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(link)} type={type} className="button">
        {text}
      </button>
    </div>
  );
}

export default Button;
