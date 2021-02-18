import React from "react";

const InputGroup = ({ name, value, type, label, error, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        id={name}
        type={type}
        onChange={e => onChange(e.target.id, e.target.value)}
        value={value}
      ></input>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default InputGroup;
