import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Menu, Button, Dropdown, Avatar } from 'antd';
import menuConfig from './config';
import './index.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  menuClick = (e) => {
    const { history } = this.props;
    const path = `/${e.key}`;
    history.push(path);
  }

  publish = () => {
    const { history } = this.props;
    history.push('/publish');
  }

  logout = () => {
    const { dispatch, history } = this.props;
    dispatch({
      type: 'USER_LOGOUT'
    })
    localStorage.removeItem('_react_koa_blog_user');
    history.push('/index');
  }

  login = (type) => {
    const { history } = this.props;
    history.push(`/login?type=${type}`);
  }

  render() {
    const { auth, user } = this.props;
    const current = this.props.location.pathname.split('/')[1];
    const menu = (
      <Menu>
        <Menu.Item onClick={this.publish}>发布文章</Menu.Item>
        <Menu.Item onClick={this.logout}>退出</Menu.Item>
      </Menu>
    )

    return (
      <div className="flex">
        <div>
          <Menu onClick={this.menuClick} mode="horizontal" selectedKeys={[current]}>
            {
              menuConfig.map(i => {
                return i.auths.includes(auth) && <Menu.Item key={i.name}>{i.title}</Menu.Item>
              })
            }        
          </Menu>
        </div>
        {
          auth == 'user' ? (
            <div>
              <Dropdown overlay={menu}>
                <Avatar src={'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2512956818,1936707538&fm=58&bpow=640&bpoh=820'} />
              </Dropdown>
            </div>
          ) : (
            <div>
              <Button type="primary" onClick={() => this.login('login')}>登录</Button>
              <Button className="margin-left" onClick={() => this.login('register')}>注册</Button>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    auth: state.user.uid ? 'user' : 'guest'
  }
} 
export default connect(mapStateToProps)(Header);