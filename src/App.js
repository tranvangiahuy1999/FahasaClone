import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bnb-gallery/dist/style.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import store from "./Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import PrivateRoute from './components/PrivateRoute';
import AdminIndex from "./pages/admin/Index";
import Login from './pages/admin/Login'

let persistor = persistStore(store);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path='/login'>
                <Login></Login>
              </Route>
              <PrivateRoute path="/admin">
                <AdminIndex></AdminIndex>
              </PrivateRoute>
              <Redirect from="*" to="/login" />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
