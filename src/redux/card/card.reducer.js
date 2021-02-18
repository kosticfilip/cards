import { ADD, UPDATE } from "./card.types";

const INITIAL_STATE = {
  cards: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };

    case UPDATE:
      let elementPos = state.cards.map(a => a.id).indexOf(action.payload.id);
      console.log(elementPos);
      const newItemArray = state.cards.slice();

      newItemArray[elementPos] = action.payload;
      return {
        ...state,
        cards: newItemArray
      };

    default:
      return state;
  }
};

export default reducer;
