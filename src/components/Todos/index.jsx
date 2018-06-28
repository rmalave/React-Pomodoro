import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import './style.css';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  addTodo = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  toggleChecked = todoId => {
    let newTodos = this.state.todos.slice();

    newTodos.forEach(todo => {
      if(todo.id === todoId) {
        todo.checked = !todo.checked;
      }
    })

    this.setState({
      todos: newTodos
    })
  }

  removeTodo = todoId => {
    let newTodos = this.state.todos.filter(todo => todoId !== todo.id);

    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div id="todo">
        <h2>Todos</h2>
          <TodoForm addTodo={this.addTodo}/>
          <TodoList
            todos={this.state.todos}
            removeTodo={this.removeTodo}
            toggleChecked={this.toggleChecked}/>
      </div>
    )
  }
}

export default Todos;
