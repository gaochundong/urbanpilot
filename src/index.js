import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";

const store = new TodoListModel();

store.addTodo("去便利店买可乐");
store.addTodo("去超市买蔬菜");
store.todos[0].finished = true;

setTimeout(() => {
  store.addTodo("回家吃饭");
}, 10000);

ReactDOM.render(
  <div>
    <TodoList store={store} />
  </div>,
  document.getElementById("root")
);
