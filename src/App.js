import React from 'react';
import {Router, Route} from 'react-router';
import createHistory from "history/createBrowserHistory";
import routeConfig from '@router/config';
import AuthorizeRoute from '@router/authorizeRoute';
import DynamicWrap from '@router/dynamicWrap';
import Header from '@views/common/header';
import { hot } from 'react-hot-loader';

const history = createHistory();

const App = () => (
  <Router history={history}>
    {/* {routeConfig.map(route => 
      <AuthorizeRoute 
        path={route.path}
        name={route.name}
        authority={route.authority}
        component={<DynamicWrap component={route.component} />} 
        redirect="/user"
      />
    )}     */}
    <Roure path="/login" render={() => <DynamicWrap component={() => import('@layout/userLayout')}/>} />
    <Route path="/" render={() => <DynamicWrap component={() => import('@layout/basicLayout')}/>} />
  </Router>
) 

export default hot(module)(App);
