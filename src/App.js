import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
// Components
import Landing from "./components/pages/landing/index";
import CardEdit from "./components/pages/card-edit/index";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/cards" exact component={Landing} />
          <Route path="/cards/add" exact component={CardEdit} />
          <Route path="/cards/:id/edit" exact component={CardEdit} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
