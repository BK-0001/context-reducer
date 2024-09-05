import { createContext, ReactNode, useContext } from "react";

// step1. create context
type Todo = {
  id: number;
  task: string;
  isCompleted: boolean;
};

// think about what you want to provide as context
type TodoContextType = {
  todos: Todo[];
  add: () => void;
  edit: () => void;
  delete: () => void;
};
const INITIAL_CONTEXT: TodoContextType = {
  todos: [],
  add: () => {},
  edit: () => {},
  delete: () => {}
};

export const TodoContext = createContext<TodoContextType>(INITIAL_CONTEXT);

// step2. create provider and provide provider
type Props = {
  children: ReactNode;
};
export function TodoContextProvider({ children }: Props) {
  const value = {
    todos: [],
    add: () => {},
    edit: () => {},
    delete: () => {}
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

// step3. use the context
export const useTodos = () => useContext(TodoContext);
