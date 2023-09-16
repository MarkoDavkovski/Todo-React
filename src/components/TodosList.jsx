import TodoTask from "./TodoTask";

const TodosList = ({ todos, handleToggle, handleEdit, handleDelete }) => {
  return (
    <ul className="todo-list">
      {todos.length === 0 && "No todos"}
      {todos.map((todo) => {
        return (
          <TodoTask
            key={todo.id}
            {...todo}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onToggle={handleToggle}
          />
        );
      })}
    </ul>
  );
};

export default TodosList;
