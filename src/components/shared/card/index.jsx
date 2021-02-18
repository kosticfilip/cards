import React from "react";
import visaImg from "theme/assets/visa.png";
import mastercardImg from "theme/assets/mastercard.png";
import discoverImg from "theme/assets/discover.png";
import chipImg from "theme/assets/chip.png";

const Card = ({ onClick, name, number, expires }) => {
  const findLogo = () => {
    const firstDigit = number[0];

    switch (firstDigit) {
      case "4":
        return visaImg;

      case "5":
        return mastercardImg;

      default:
        return discoverImg;
    }
  };
  return (
    <div className="card" onClick={onClick}>
      <div className="card-logo">
        <img src={findLogo()} />
      </div>
      <img className="card-chip" src={chipImg} />
      <div className="card-number">{number}</div>
      <div className="card-info">
        <div className="username">{name}</div>
        <div className="date">{expires}</div>
      </div>
    </div>
  );
};

export default Card;
