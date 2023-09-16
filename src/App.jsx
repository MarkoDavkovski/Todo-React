import { useState } from "react";

import "./App.css";
import CreateTodoForm from "./components/CreateTodoForm";
import TodosList from "./components/TodosList";

function App() {
  const [id, setID] = useState(0);
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = (todo) => {
    setTodos((currTodos) => {
      return [...currTodos, { id: id, task: todo, completed: false }];
    });
    setID(id + 1);
  };

  const handleEdit = (id, editedTask) => {
    setTodos((currTodos) => {
      return currTodos.map((todo) => {
        if (todo.id === id) return { ...todo, task: editedTask };
        return todo;
      });
    });
  };
  const handleToggle = (id, completed) => {
    setTodos((currTodos) => {
      return currTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed };
        return todo;
      });
    });
  };
  const handleDelete = (id) => {
    setTodos((currTodos) => {
      return currTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <CreateTodoForm handleCreateTodo={handleCreateTodo} />
      <h1>Todos: </h1>
      <TodosList
        todos={todos}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
