import { useState } from "react";

const TodoTask = ({ onDelete, onEdit, onToggle, id, task, completed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(id, editedTask);
    setIsEditing(false);
  };

  return (
    <li className="todo-task" key={id}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        <>
          <label htmlFor="todo-complete">
            {task} {id}
            <input
              type="checkbox"
              onChange={(e) => onToggle(id, e.target.checked)}
              checked={completed}
            />
          </label>
          <button
            className="edit-task-btn task-btn"
            onClick={() => handleEditClick()}
          >
            Edit
          </button>
          <button
            className="delete-task-btn task-btn"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoTask;
