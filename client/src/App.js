import React from 'react';
import {Router, Switch, Route} from 'react-router';
import createHashHistory from "history/createHashHistory";
import DynamicWrap from '@components/dynamicWrap';
import { hot } from 'react-hot-loader';

const history = createHashHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route key="login" path="/login" render={(props) => <DynamicWrap {...props} load={() => import('@layout/loginLayout')}/>} />
      <Route key="basic" path="/" render={(props) => <DynamicWrap {...props} load={() => import('@layout/basicLayout')}/>} />
    </Switch>
  </Router>
) 

export default hot(module)(App);
