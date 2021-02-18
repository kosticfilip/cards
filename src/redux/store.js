import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, composeWithDevTools());

// Save state to locale Storage - could use setTimeout or smth...
store.subscribe(() => {
  saveState({
    cards: store.getState().cards
  });
});

export default store;
