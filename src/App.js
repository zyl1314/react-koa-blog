import React from 'react';
import {Router, Route} from 'react-router';
import createHistory from "history/createBrowserHistory";
// import routeConfig from '@router/config';
import AuthorizeRoute from '@router/authorizeRoute';
import DynamicRoute from '@router/dynamicRoute';
import { hot } from 'react-hot-loader';

const history = createHistory();

const App = () => (
  <Router history={history}>
    <Route path="/login" component={<DynamicRoute component={() => import('@views/user')} />} />
  </Router>
) 



export default hot(module)(App);
