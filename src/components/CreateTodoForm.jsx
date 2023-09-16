import { useState } from "react";

const CreateTodoForm = ({ handleCreateTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") return;
    handleCreateTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="create-todo">Create todo</label>
      <input
        type="text"
        id="create-todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add todo task</button>
    </form>
  );
};

export default CreateTodoForm;
