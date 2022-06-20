import "./Card.css";
import React from "react";

const Card = ({ titulo, children, color = "#F00"}) => {
  return (
    <div style={{backgroundColor: color, borderColor: color}} className="Card">
      <div className="Title">{titulo}</div>
      <div className="Content">{children}</div>
    </div>
  );
};

export default Card;
