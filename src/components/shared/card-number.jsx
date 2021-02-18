import React, { useState, useEffect } from "react";

const setInitalState = value => {
  if (value) {
    const splitted = value.split(" ");
    return {
      n1: splitted[0],
      n2: splitted[1],
      n3: splitted[2],
      n4: splitted[3]
    };
  } else {
    return { n1: "", n2: "", n3: "", n4: "" };
  }
};

const CardNumber = ({ name, value, label, error, onChange }) => {
  // Inital value format 0000 0000 0000 0000
  const [cardNumber, setCardNumber] = useState(setInitalState(value));

  const handleInputChange = e => {
    const { id, value } = e.target;
    setCardNumber({ ...cardNumber, [id]: value });
  };

  useEffect(() => {
    onChange(
      name,
      `${cardNumber.n1} ${cardNumber.n2} ${cardNumber.n3} ${cardNumber.n4}`
    );
  }, [cardNumber]);

  const { n1, n2, n3, n4 } = cardNumber;
  return (
    <div>
      <label>{label}</label>
      <div className="card-number-input">
        <input
          maxLength="4"
          id="n1"
          onChange={handleInputChange}
          value={n1}
        ></input>
        <input
          maxLength="4"
          id="n2"
          onChange={handleInputChange}
          value={n2}
        ></input>
        <input
          maxLength="4"
          id="n3"
          onChange={handleInputChange}
          value={n3}
        ></input>
        <input
          maxLength="4"
          id="n4"
          onChange={handleInputChange}
          value={n4}
        ></input>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default CardNumber;
