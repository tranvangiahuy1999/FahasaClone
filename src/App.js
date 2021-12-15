import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bnb-gallery/dist/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import ShopRoute from "./pages/router/ShopRoute";

let persistor = persistStore(store);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route route="/">
                <ShopRoute />
              </Route>
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
