import * as R from 'ramda'
import React from 'react'
import { shallow, mount } from 'enzyme';
import {Cell, Board} from './tic_tac_toe';

describe('Cell', () => {
  it('should render with a button with owner', () => {
    const wrapper = shallow(<Cell owner="X"/>);
    // console.log(wrapper.debug());

    expect(wrapper.find('button').text()).toEqual('X');
  });

  it('should render with a button the given cellNr', () => {
    const wrapper = mount(<Cell cellNr={5} />);
    // console.log(wrapper.find('button').getDOMNode().attributes.getNamedItem("data-cell-nr").value);

    expect(wrapper.find('button').prop('data-cell-nr')).toEqual(5);
  });

  it('should call onClick handler', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Cell onClick={handler}/>);
    wrapper.find('button').simulate('click');
    expect(handler).toBeCalled();
  })
});

describe('Board', () => {
  fit('should have the right number of cells', () => {
    const wrapper = mount(<Board x="4" y="4"/>);
    console.log(wrapper.debug());
    expect(wrapper.find(Cell).length).toEqual(16);
  });
});