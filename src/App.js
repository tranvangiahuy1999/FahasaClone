import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bnb-gallery/dist/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./Store";
import { Provider } from "react-redux";

import ShopRoute from "./pages/router/ShopRoute";

function App() {
  return (
    <div className="App">
      <Provider store={store}>        
          <Router>
            <Switch>
              <Route route="/">
                <ShopRoute />
              </Route>
            </Switch>
          </Router>        
      </Provider>
    </div>
  );
}

export default App;
