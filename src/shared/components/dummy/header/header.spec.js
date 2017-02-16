import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from './header.component'

describe('render component', function() {
  it('content', function() {
    expect(shallow(<Header />).contains(<div className="header">online shop</div>)).toBe(true);
  })
});