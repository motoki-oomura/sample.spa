import React from 'react';
import { render } from 'react-dom';
import TodoCreator from './todo-creator';
import TodoList from './todo-list';

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  hundleTodoSubmit(todo) {
    todo.id = new Date();
    const newMessages = [ ...this.state.todos, todo ];
    this.setState({
      todos: newMessages
    });
  }

  render() {
    return (
      <div className="todoBox" ref="domae">
        <TodoCreator onTodoSubmit={ this.hundleTodoSubmit.bind(this) } ref="creator"></TodoCreator>
        <TodoList todos={ this.state.todos } ref="list"></TodoList>
      </div>
    );
  }
}