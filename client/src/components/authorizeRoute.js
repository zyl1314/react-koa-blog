import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

class AuthorizeRoute extends Component {
  render() {
    const { path, auths, render, redirect, currentAuth  } = this.props;
    if (auths.includes(currentAuth)) {
      return <Route path={path} render={render} />
    } else {
      return <Route path={path} render={() => <Redirect to={redirect} />}/>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentAuth: state.user._id ? 'user' : 'guest'
  }
}

export default connect(mapStateToProps)(AuthorizeRoute);