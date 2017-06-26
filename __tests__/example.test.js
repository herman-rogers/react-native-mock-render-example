import { mount } from 'enzyme';
import Example from '../src/example.js';
import React from 'react';

it('doesnt work correctly', () => {
  const wrapper = mount(<Example value={'bar'} />);

  expect(wrapper.prop('value')).toEqual('bar');
});
