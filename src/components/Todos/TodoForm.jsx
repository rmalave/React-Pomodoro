import React, { Component } from 'react';
import uuid from 'uuid/v4';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let id = uuid();
    let title = this.state.title;
    this.props.addTodo({
      title,
      id: id,
      checked: false
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="todo-form" className="form-inline justify-content-center">
        <div className="form-group">
            <div className = "col-sm-12" >
              <input
                id="title"
                className="form-control" type="text"
                name="title"
                value={this.state.title}
                placeholder="Add task"
                onChange={this.handleChange} />
              <input className="btn btn-primary" type="submit" value="Add"/>
            </div>
          </div>
      </form>
    )
  }
}

export default TodoForm;
