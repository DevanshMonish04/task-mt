import { FaEdit, FaTrash } from "react-icons/fa";
import { PiDotsSixVerticalBold } from "react-icons/pi";

const TaskCard = ({
  task,
  toggleTask,
  deleteTask,
  editTask,
  dragHandleProps,
}) => {
  // Check whether the task is overdue
  // A task is overdue if:
  // 1. It is not completed
  // 2. A due date exists
  // 3. The due date has already passed
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
        
        {/* Task Information Section */}
        <div className="flex-1">

          {/* Task Title */}
          <h3
            className={`text-xl font-semibold ${
              task.completed
                ? "line-through text-gray-400"
                : ""
            }`}
          >
            {task.title}
          </h3>

          {/* Task Description */}
          <p className="text-gray-600 mt-2">
            {task.description}
          </p>

          {/* Task Start Date */}
          <p className="text-sm text-gray-500 mt-2">
            Start Date: {task.startDate || "Not Set"}
          </p>

          {/* Task Due Date */}
          <p className="text-sm text-gray-500">
            Due Date: {task.dueDate || "Not Set"}
          </p>

          {/* Overdue Warning */}
          {isOverdue && (
            <p className="text-red-500 text-sm mt-2 font-medium">
              ⚠ Overdue
            </p>
          )}
        </div>

        {/* Task Actions Section */}
        <div className="flex flex-col items-center gap-4 ml-4">

          {/* Complete/Incomplete Toggle */}
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            className="h-5 w-5 cursor-pointer"
          />

          {/* Drag Handle for Reordering Tasks */}
          <div
            {...dragHandleProps}
            className="cursor-grab text-gray-400 hover:text-blue-600 transition-all duration-200"
            title="Drag Task"
          >
            <PiDotsSixVerticalBold size={22} />
          </div>
        </div>
      </div>

      {/* Edit and Delete Buttons */}
      <div className="flex gap-3 mt-4">

        {/* Edit Task Button */}
        <button
          onClick={() => editTask(task)}
          className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
        >
          <FaEdit />
        </button>

        {/* Delete Task Button */}
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