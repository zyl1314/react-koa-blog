import React, {Component} from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Header from '@layout/common/header';
import AuthorizeRoute from '@components/authorizeRoute';
import DynamicWrap from '@components/dynamicWrap';
import routerConfig from "./config";
import './index.css';

class BasicLayout extends Component {
  render() {
    const { load, ...rest } = this.props;
    return (
      <div className="main_wrapper">
        <Header {...rest} />
        <Switch>
          {
            routerConfig.map(i => {
              return (
                <AuthorizeRoute 
                  key={i.key}
                  path={i.path}
                  auths={i.auths}
                  render={(props) => <DynamicWrap {...props} load={i.component} />}
                  redirect={i.redirect}
                />
              )
            })
          }
          <Route exact path="/" render={() => <Redirect to="/index" />} />
          <Route path="*" render={() => <Redirect to="/index" />} />
        </Switch>
      </div>
    )
  }
}

export default BasicLayout