import {
  TodoContextProvider,
  useTodos
} from "./contexts/TodoContext/TodoContextProvider";

export function App() {
  const { todos } = useTodos();
  return (
    <TodoContextProvider>
      {todos.map((todo) => (
        <li>{todo.task}</li>
      ))}
    </TodoContextProvider>
  );
}
