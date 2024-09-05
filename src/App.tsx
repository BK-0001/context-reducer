import { FormEvent } from "react";
import { useTodos } from "./contexts/TodoContext/TodoContextProvider";

export function App() {
  const { todos, newTask, updateNewTask, add } = useTodos();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    add();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(event) => updateNewTask(event.target.value)}
        />
        <button>Add</button>
      </form>
      {todos.map((todo) => (
        <li>{todo.task}</li>
      ))}
    </>
  );
}
