import { FaEdit, FaTrash } from "react-icons/fa";

const TaskCard = ({
  task,
  toggleTask,
  deleteTask,
  editTask,
}) => {

  const isOverdue =
    !task.completed &&
    task.dueDate &&
    new Date(task.dueDate) < new Date();

  return (
    <div
      className={`bg-white rounded-xl shadow p-5 border-l-4 ${
        isOverdue
          ? "border-red-500"
          : "border-transparent"
      }`}
    >
      <div className="flex justify-between items-start">

        <div>
          <h3
            className={`text-xl font-semibold ${
              task.completed
                ? "line-through text-gray-400"
                : ""
            }`}
          >
            {task.title}
          </h3>

          <p className="text-gray-600 mt-2">
            {task.description}
          </p>

          <p className="text-sm text-gray-500 mt-3">
            Start Date: {task.startDate || "No Start Date"}
          </p>

          <p className="text-sm text-gray-500 mt-3">
            Due: {task.dueDate || "No Due Date"}
          </p>

          {isOverdue && (
            <p className="text-red-500 text-sm mt-2 font-medium">
              ⚠ Overdue
            </p>
          )}
        </div>

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="h-5 w-5 cursor-pointer"
        />
      </div>

      <div className="flex gap-3 mt-4">

        <button
          onClick={() => editTask(task)}
          className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
        >
          <FaEdit />
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          <FaTrash />
        </button>

      </div>
    </div>
  );
};

export default TaskCard;