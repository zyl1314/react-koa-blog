import React from 'react';
import {Router, Route} from 'react-router';
import createHistory from "history/createBrowserHistory";
import routeConfig from '@router/config'
import { hot } from 'react-hot-loader';
const history = createHistory();

const App = () => { 
  return <Router history={history}>
    {routeConfig.map((route) => {
      <Route />
    })}
  </Router>
}

export default hot(module)(App);
