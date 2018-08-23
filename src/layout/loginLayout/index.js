import React, {Component} from 'react';
import { Form, Input, Icon, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import './index.css';

class LoginLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'login'
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  toggle = () => {
    const { type } = this.state; 
    const _type = type == 'login' ? 'regist' : 'login';
    this.setState({
      type: _type
    }) 
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { type } = this.state;
    return <div className="wrapper">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}        
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary"  htmlType="submit" className="login-form-button">
            {type == 'login' ? '登录' : '注册'}
          </Button>
          <a onClick={this.toggle}>{type == 'login' ? '注册' : '登录'}</a>
        </FormItem>
      </Form>
    </div>
  }
}

export default Form.create()(LoginLayout)