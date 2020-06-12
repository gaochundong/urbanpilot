import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import TodoView from "./TodoView";

@observer
class TodoListView extends React.Component {
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
          {this.props.viewModel.todos.map(todo => (
            <TodoView todo={todo} key={todo.id} />
          ))}
        </ul>
        未完成项: {this.props.viewModel.unfinishedTodoCount}个
      </div>
    );
  }

  @action
  handleNewTodoTitleChange = e => {
    this.newTodoTitle = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.viewModel.addTodo(this.newTodoTitle);
    this.newTodoTitle = "";
    e.preventDefault();
  };
}

export default TodoListView;
