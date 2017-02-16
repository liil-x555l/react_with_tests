import React, { PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};

class Foo extends React.Component {
  constructor(props) {
    super(props);
  }

  _testFunc(a,b) {
    return a+b;
  }

  render() {
    return (
      // <div className="foo" />
      <div className="foo">Hi all again</div>
    );
  }
}

Foo.propTypes = propTypes;
Foo.defaultProps = defaultProps;

export default Foo;
