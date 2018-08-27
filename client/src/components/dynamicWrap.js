import {Component, createElement} from 'react';

class DynamicWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: null
    }
  }

  componentWillMount() {
    const { load } = this.props;
    load().then((component) => {
      this.setState({
        component: component.default || component
      })
    })
  }

  render() {
    const { component } = this.state;
    const { load, ...rest } = this.props;
    return component && createElement(component, {...rest})
  }
}

export default DynamicWrap;