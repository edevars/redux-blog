import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bulma";
import Users from "./Users/Users";
import Layout from "./Layout";
import Tasks from "./tasks";
import Posts from "./posts";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import reducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducers, //Todos los reducers
  {}, //Estado inicial
  composeWithDevTools(applyMiddleware(reduxThunk))
);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/tareas" component={Tasks} />
          <Route exact path="/publicaciones/:index" component={Posts} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default App;
