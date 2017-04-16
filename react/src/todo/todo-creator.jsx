import React from 'react';
import { render } from 'react-dom';

export default class TodoCreator extends React.Component {
  constructor(props) {
    super(props)
  }

  hundleSubmit(e) {
    e.preventDefault();
    const title = this.inputTitle.value;
    const desc = this.inputDesc.value;

    if(!title) {
      alert('タイトルを入力してください');
      return;
    }

    this.props.onTodoSubmit({ title: title, desc: desc });
  }


  render() {
    return (
      <form action="" onSubmit={ this.hundleSubmit.bind(this) }>
        <input type="text" placeholder="タスク名" ref={ (input) => this.inputTitle = input } />
        <input type="text" placeholder="詳細" ref={ (input) => this.inputDesc = input } />
        <button>add</button>
      </form>
    );
  }
}