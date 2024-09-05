import { Reducer } from "react";
import { Todo } from "./TodoContextProvider";

type TodoAction = { type: "INIT"; todos: Todo[] };

type TodoReducer = Reducer<Todo[], TodoAction>;

export const todoReducer: TodoReducer = (prevState, action) => {
  switch (action.type) {
    case "INIT":
      return action.todos;

    default:
      return prevState;
  }
};
