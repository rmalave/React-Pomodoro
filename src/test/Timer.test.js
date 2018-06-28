import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Timer from '../components/Timer';
import TimerButton from '../components/Timer';
import TimerConfig from '../components/Timer/TimerButton';
import TimerDisplay from '../components/Timer/TimerConfig';

describe('Render Timer', () => {
  it('Timer should render without throwing an error', () => {
    const wrapper = mount(
      <Timer />
    )
    const h1 = wrapper.find('#timer h1')

    expect(h1.text()).toBe('Pomodoro Timer')
  });

  it('Timer button should render without throwing an error', () => {
    const wrapper = mount(
      <TimerButton />
    )
    const button = wrapper.find('#timer-button');

    expect(button.text()).toBe('Start')
  });

  it('Timer display should render without throwing an error', () => {
    const wrapper = mount(
      <Timer />
    )
    expect(wrapper.find('.timer-face').length).toEqual(1)
  });

  it('Timer config should render hours input without throwing an error', () => {
    const wrapper = mount(
      <Timer />
    )
    expect(wrapper.find('#hours').length).toEqual(1)
  });

  it('Timer config should render minutes input without throwing an error', () => {
    const wrapper = mount(
      <Timer />
    )
    expect(wrapper.find('#minutes').length).toEqual(1)
  });

  it('Timer config should render seconds input without throwing an error', () => {
    const wrapper = mount(
      <Timer />
    )
    expect(wrapper.find('#seconds').length).toEqual(1)
  });

  describe('Start time should be 25 minutes', () => {
    it('should respond to change event and change the state of the Timer component', () => {
     const wrapper = mount(<Timer />);

     expect(wrapper.state('currentTime').get('minutes')).toEqual(25);
   });
  });

  describe('Minutes input', () => {
    it('should respond to change event and change the state of the Timer component', () => {
     const wrapper = mount(<Timer />);
     const minutes = wrapper.find('#minutes');

     minutes.simulate('change', {target: {id: 'minutes', value: 10}})

     expect(wrapper.state('currentTime').get('minutes')).toEqual(10);
   });
  });

  describe('Hours input', () => {
    it('should respond to change event and change the state of the Timer component', () => {
     const wrapper = mount(<Timer />);
     const minutes = wrapper.find('#hours');

     minutes.simulate('change', {target: {id: 'hours', value: 10}})

     expect(wrapper.state('currentTime').get('hours')).toEqual(10);
   });
  });

  describe('seconds input', () => {
    it('should respond to change event and change the state of the Timer component', () => {
     const wrapper = mount(<Timer />);
     const minutes = wrapper.find('#seconds');

     minutes.simulate('change', {target: {id: 'seconds', value: 10}})

     expect(wrapper.state('currentTime').get('seconds')).toEqual(10);
   });
  });

  describe('Using timer', () => {
    it('should be able to start timer', () => {
     const wrapper = mount(<Timer />);
     const button = wrapper.find('#timer-button');

     button.simulate('click');

     expect(wrapper.state('timerState')).toBe(1);
   });
  });
});
