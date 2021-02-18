import { ADD, UPDATE } from "./card.types";

export const addCard = data => {
  console.log("ADDING ACTION");
  return {
    type: ADD,
    payload: data
  };
};

export const updateCard = data => {
  return {
    type: UPDATE,
    payload: data
  };
};
