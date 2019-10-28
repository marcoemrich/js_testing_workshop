import React from 'react'
import { shallow, mount, render } from 'enzyme';
import {Foo, Klicker} from './foo';

describe('Foo', () => {
  it('should render Hello with a Name', () => {
    const wrapper = shallow(<Foo name="Salzburg"/>);
    expect(wrapper.find('.foo').text()).toEqual('Hello Salzburg');
  });
}); 

describe('Klicker', () => {
  it('should start with 0 clicks', () => {
    const wrapper = shallow(<Klicker />);
    expect(wrapper.state('numberOfTimesClicked')).toEqual(0);
  });

  it('should inc number of clicks', () => {
    const wrapper = shallow(<Klicker />);
    wrapper.find("button").simulate('click');
    expect(wrapper.state('numberOfTimesClicked')).toEqual(1);
  });

}); 



