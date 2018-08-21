import React, { Component } from 'react';
import { Button } from 'antd';
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return (
      <div className="App">
        hello world!
        <Button>click</Button>
      </div>
    );
  }
}

export default hot(module)(App);
