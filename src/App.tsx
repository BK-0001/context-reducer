import { useTodos } from "./contexts/TodoContext/TodoContextProvider";

export function App() {
  const { todos } = useTodos();

  return (
    <>
      {todos.map((todo) => (
        <li>{todo.task}</li>
      ))}
    </>
  );
}
