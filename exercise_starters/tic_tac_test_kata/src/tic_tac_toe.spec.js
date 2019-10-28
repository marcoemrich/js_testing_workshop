import * as R from 'ramda'
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import {Cell, Board} from './tic_tac_toe';

describe('Cell', () => {
  it('should render with a button with owner', () => {
    const wrapper = shallow(
      <Cell owner="X" cellNr="5"></Cell>
    );

    expect(wrapper.find("button").length).toEqual(1)
    expect(wrapper.find("button").text()).toEqual("X")
  });
  it.todo('should render with data-cell-nr');

  it('should call onClick handler', () => {
    const clickHandlerSpy = jest.fn();
    const wrapper = shallow(
      <Cell owner="" cellNr="5" onClick={clickHandlerSpy} ></Cell>
    );

    wrapper.find("button").simulate('click');

    expect(clickHandlerSpy).toBeCalled();

  });
});

describe('Board', () => {
  it.todo('should have the right number of cells');
});

