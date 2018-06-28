import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Timer from '../components/Timer';

describe('A timer', () => {
  it('should render without throwing an error', () => {
    const wrapper = mount(
      <Timer />
    )
    const h1 = wrapper.find('#timer h1')

    expect(h1.text()).toBe('Pomodoro Timer')
  });
})
