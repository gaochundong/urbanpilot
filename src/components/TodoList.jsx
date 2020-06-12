import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import Todo from "./Todo";

@observer
class TodoList extends React.Component {
  @observable newTodoTitle = "";

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          新增Todo项:
          <input
            type="text"
            value={this.newTodoTitle}
            onChange={this.handleNewTodoTitleChange}
          />
          <button type="submit">添加</button>
        </form>
        <hr />
        <ul>
          {this.props.store.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
        未完成项: {this.props.store.unfinishedTodoCount}个
      </div>
    );
  }

  @action
  handleNewTodoTitleChange = e => {
    this.newTodoTitle = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.store.addTodo(this.newTodoTitle);
    this.newTodoTitle = "";
    e.preventDefault();
  };
}

export default TodoList;
