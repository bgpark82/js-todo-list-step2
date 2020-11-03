import { addUser, fetchUser, fetchUsers } from "../domain/userApi.js";
import { SELECTOR } from "../utils/constant.js";
import { checkTarget } from "../utils/validator.js";
import TodoList from "./TodoList.js";
import UserList from "./UserList.js";
import TodoInput from "./TodoInput.js";
import { addTodo } from "../domain/todoApi.js";
import { ADD_TODO, ADD_USER, LOAD_USER } from "../store/Store.js";

function App({ $target, store }) {
  const init = async () => {
    checkTarget($target);

    this.userList = new UserList({
      $target: document.querySelector(SELECTOR.USER_LIST),
      onChangeUser: this.onChangeUser,
      onAddUser: this.onAddUser,
      store,
    });

    this.todoList = new TodoList({
      $target: document.querySelector(SELECTOR.TODO_LIST),
      store,
    });

    this.todoInput = new TodoInput({
      $target: document.querySelector(SELECTOR.TODO_INPUT),
      onAddTodo: this.onAddTodo,
      store,
    });
  };

  this.onChangeUser = async (username) => {
    store.dispatch({
      type: LOAD_USER,
      payload: await fetchUser(username),
    });
  };

  this.onAddUser = async (username) => {
    store.dispatch({
      type: ADD_USER,
      payload: await addUser(username),
    });
  };

  this.onAddTodo = async (title, name) => {
    store.dispatch({
      type: ADD_TODO,
      payload: await addTodo(title, name),
    });
  };

  init();
}

export default App;
