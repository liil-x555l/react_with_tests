import React, {Component} from 'react';

export default class Home extends Component {

  _myMethod(a) {
    return a + 1;
  }

  render() {
    return (
      <div>Home component</div>
    )
  }
}
