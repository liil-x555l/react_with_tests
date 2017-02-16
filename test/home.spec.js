import React from 'react';
import Home from '../src/home/home.component';
import { shallow, mount, render } from 'enzyme';

describe('Home component', function() {
  const home = new Home();

  // it('_myMethod', function() {
  //   expect(home._myMethod(1)).toBe(2);
  //   expect(home._myMethod(1)).not.toBe(3);
  // })

  it('contains spec with an expectation', function() {
    expect(shallow(<Home />).contains(<div>Home component</div>)).toBe(true);
  })

})
