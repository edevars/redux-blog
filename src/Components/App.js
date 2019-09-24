import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bulma";
import Users from "./Users/Users";
import Layout from "./Layout";
import Tasks from "./tasks";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers";

const store = createStore(
  reducers, //Todos los reducers
  {} //Estado inicial
);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/tareas" component={Tasks} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default App;
