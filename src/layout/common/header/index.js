import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import menuConfig from './config';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    const { history } = this.props;
    const path = `/${e.key}`;
    history.push(path)
  }

  render() {
    const { auth } = this.props;
    const current = this.props.location.pathname.split('/')[1];
    return (
      <Menu onClick={this.handleClick} mode="horizontal" selectedKeys={[current]}>
        {
          menuConfig.map(i => {
            return i.auths.includes(auth) && <Menu.Item key={i.name}>{i.title}</Menu.Item>
          })
        }        
      </Menu>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.user.auth
  }
} 
export default connect(mapStateToProps)(Header);