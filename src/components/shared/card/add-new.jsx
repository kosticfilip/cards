import React from "react";

const Card = ({ onClick }) => {
  return (
    <div onClick={onClick} className="card add-new">
      +
    </div>
  );
};

export default Card;
