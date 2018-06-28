import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return props.todos.map(todo => {
    return (
      <div key={todo.id}>
        <Todo
          toggleChecked={props.toggleChecked}
          removeTodo={props.removeTodo}
          todo={todo} />
      </div>
    )
  })
}

export default TodoList;
