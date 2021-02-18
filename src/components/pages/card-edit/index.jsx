import React, { useState, useEffect } from "react";
import Card from "components/shared/card/index";
import InputGroup from "components/shared/input-group";
import CardNumber from "components/shared/card-number";

import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { addCard, updateCard } from "redux/card/card.actions";

// Utilites
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
const validFirstDigits = ["4", "5", "6"];

// COMPONENT
const CardEdit = props => {
  let cardId = props.match.params.id;
  const { cards } = props.cards;
  const card = cards.find(card => card.id === cardId);
  let history = useHistory();

  // Inital form state - edit/add
  const setInitalState = () => {
    if (cardId) {
      return card;
    } else {
      return {
        name: "",
        number: "",
        expires: ""
      };
    }
  };

  const [state, setState] = useState(setInitalState());
  const [errors, setErrors] = useState({
    name: null,
    number: null,
    expires: null,
    formValid: true
  });
  const [isFormValid, setIsFormValid] = useState(true);

  // Form item change ------------------------------------
  const handleInputChange = (key, value) => {
    setState({ ...state, [key]: value });

    // Validation
    switch (key) {
      case "expires":
        if (Date.now() > new Date(value)) {
          setErrors({
            ...errors,
            [key]: "Wrong date"
          });
        } else {
          setErrors({ ...errors, [key]: null });
        }
        break;

      case "number":
        if (!validFirstDigits.includes(value[0])) {
          setErrors({
            ...errors,
            [key]: "Wrong card number"
          });
        } else {
          setErrors({ ...errors, [key]: null });
        }
        break;

      default:
        return;
    }
  };

  // Form Submit ----------------------------------------
  const handleSubmit = () => {
    if (cardId) {
      props.updateCard(state);
      history.push("/");
    } else {
      // Add New
      props.addCard({ ...state, id: uuidv4() });
      history.push("/");
    }
  };

  useEffect(() => {
    if (errors.number || errors.expires) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [errors]);

  const { name, number, expires } = state;

  return (
    <div className="container">
      <div className="edit-card-container">
        <h3>{cardId ? "Edit" : "Add"} Card</h3>
        <Card name={name} number={number} expires={expires}></Card>

        <form onSubmit={e => e.preventDefault()}>
          <InputGroup
            name="name"
            label="Name"
            type="text"
            value={name}
            onChange={handleInputChange}
          ></InputGroup>

          <CardNumber
            name="number"
            error={errors.number}
            label="Card Number"
            value={number}
            onChange={handleInputChange}
          ></CardNumber>

          <InputGroup
            name="expires"
            label="Expires on"
            error={errors.expires}
            type="date"
            value={expires}
            onChange={handleInputChange}
          ></InputGroup>

          <button disabled={isFormValid} onClick={handleSubmit}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addCard: data => dispatch(addCard(data)),
    updateCard: data => dispatch(updateCard(data))
  };
};

const mapStateToProps = state => {
  return {
    cards: state.cards
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardEdit);
