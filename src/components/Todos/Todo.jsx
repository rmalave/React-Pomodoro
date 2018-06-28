import React, { Component } from 'react';

class Todo extends Component {
  toggleChecked = () => {
    this.props.toggleChecked(this.props.todo.id)
  }

  removeTodo = () => {
    this.props.removeTodo(this.props.todo.id);
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className={"card-text text-left col-8 col-md-10 checked-" + this.props.todo.checked}>{this.props.todo.title}</div>
            <div className="col-4 col-md-2">
              <div className="row">
                <div className="col-6">
                  <button onClick={this.toggleChecked}
                    className={"check checked-" + this.props.todo.checked}>
                  </button>
                </div>
                <div className="col-6">
                  <button onClick={this.removeTodo}
                    className="remove-todo">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Todo;
