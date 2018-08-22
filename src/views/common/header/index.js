import React, {Component} from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>this is header</p>
  }
}

const mapStateToProps = state => {
  return {
    auth: state.user.auth
  }
} 
export default connect()(Header);