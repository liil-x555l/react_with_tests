import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Foo from '../src/Foo.component';

describe("A suite", function() {
  const foo = new Foo();

  it("contains spec with an expectation", function() {
    expect(shallow(<Foo />).contains(<div className="foo">Hi all again</div>)).toBe(true);
    // expect(shallow(<Foo />).contains(<div className="foo" />)).toBe(true);
  });

  it("contains spec with an expectation", function() {
    expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it("contains spec with an expectation", function() {
    expect(mount(<Foo />).find('.foo').length).toBe(1);
  });

  it("can run an expectation with render", function() {
    expect(render(<Foo />).find('.foo').length).toBe(1);
  });

  it('Foo method', function() {
    expect(foo._testFunc(1,2)).toBe(3);
  });

  it('toMatch method', function() {
    const a = 'foo bar lee';
    expect(a).toMatch('bar');
  });

  it('toBeDefined method', function() {
    var a = 5;
    expect(a).toBeDefined();
  });

  it('toBeTruthy method', function() {
    const a = 'foo bar lee';
    expect(a).toBeTruthy();
  });
});
