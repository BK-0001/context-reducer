import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import { todoReducer } from "./TodoReducer";

// step1. create context
export type Todo = {
  id: number;
  task: string;
  isCompleted: boolean;
};

// think about what you want to provide as context
type TodoContextType = {
  newTask: string;
  updateNewTask: (task: string) => void;
  todos: Todo[];
  add: () => void;
  edit: () => void;
  delete: () => void;
};
const INITIAL_CONTEXT: TodoContextType = {
  newTask: "",
  updateNewTask: () => {},
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
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTask, setNewTask] = useState<string>("");

  const updateNewTask = (task: string) => {
    setNewTask(task);
  };

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch("http://localhost:3005/todos");

      const todos = await response.json();

      dispatch({ type: "INIT", todos });
    };

    getTodos();
  }, []);

  const add = () => {
    dispatch({
      type: "ADD",
      todo: { id: todos.length, task: newTask, isCompleted: false }
    });
  };

  const value = {
    newTask,
    updateNewTask,
    todos,
    add,
    edit: () => {},
    delete: () => {}
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

// step3. use the context
// eslint-disable-next-line react-refresh/only-export-components
export const useTodos = () => useContext(TodoContext);
