import TaskCard from "./TaskCard";

const TaskList = ({
  tasks,
  toggleTask,
  deleteTask,
  editTask,
}) => {

  if (tasks.length === 0) {
    return (
      <div className="bg-white p-10 rounded-xl shadow text-center">
        <h2 className="text-xl font-semibold">
          No Tasks Found
        </h2>

        <p className="text-gray-500 mt-2">
          Create your first task.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
       <TaskCard
  key={task.id}
  task={task}
  toggleTask={toggleTask}
  deleteTask={deleteTask}
  editTask={editTask}
/>
      ))}
    </div>
  );
};

export default TaskList;