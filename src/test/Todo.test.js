import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Todos from '../components/Todos';
import Todo from '../components/Todos/Todo';
import TodoForm from '../components/Todos/TodoForm';
import TodoList from '../components/Todos/TodoList';

describe('Todo', () => {
  it('Todo should render without throwing an error', () => {
    const wrapper = mount(
      <Todos />
    )
    const h2 = wrapper.find('#todo h2')

    expect(h2.text()).toBe('Todos')
  });

  it('TodoForm should render without throwing an error', () => {
    const wrapper = mount(
      <TodoForm />
    )
    const form = wrapper.find('form');

    expect(form.length).toEqual(1)
  });

  it('Todo list should render without throwing an error', () => {
    const wrapper = shallow(
      <TodoForm />
    )
    const title = wrapper.find('#title')
    title.simulate('change', {target: {name: 'title', value: 'new todo'}})

    expect(wrapper.state('title')).toEqual('new todo');
  });

  it('should add a todo to the todos array', () => {
    const wrapper = mount(
      <Todos />
    );

    const form = wrapper.find('form');
    const title = wrapper.find('#title')
    title.simulate('change', {target: {name: 'title', value: 'new todo'}})
    form.simulate('submit');

    expect(wrapper.state('todos').length).toEqual(1);
  });

  it('TodoForm config should render title input without throwing an error', () => {
    const wrapper = mount(
      <TodoForm />
    )
    expect(wrapper.find('#title').length).toEqual(1)
  });

  describe('Should be able to complete an item from the todo list', () => {
    if('should complete an item on clicking the complete button', () => {
      const wrapper = mount(
        <Todos />
      )

      wrapper.find('.check').simulate('click');
      expect(wrapper.find('.checked-true').length).toEqual(1);
    });
  });
});
