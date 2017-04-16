import React from 'react';
import { render } from 'react-dom';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const TodoItems = this.props.todos.map((todo) => {
      return (
        <li>
          <dl className="todo-item" key={todo.id}>
            <dt>{ todo.title }</dt>
            <dd>{ todo.desc }</dd>
          </dl>
        </li>
        );
    });

    return (
      <ul>
        { TodoItems }
      </ul>
    )
  }
}