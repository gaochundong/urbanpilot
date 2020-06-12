import React from "react";
import ReactDOM from "react-dom";
import TodoListView from "./views/TodoListView";
import TodoListModel from "./models/TodoListModel";

const viewModel = new TodoListModel();

viewModel.addTodo("去便利店买可乐");
viewModel.addTodo("去超市买蔬菜");
viewModel.todos[0].finished = true;

setTimeout(() => {
  viewModel.addTodo("回家吃饭");
}, 10000);

ReactDOM.render(
  <div>
    <TodoListView viewModel={viewModel} />
  </div>,
  document.getElementById("root")
);
