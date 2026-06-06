import { useState, useEffect } from "react";

const TaskForm = ({
  addTask,
  updateTask,
  editingTask,
  isEditing,
}) => {
  // State for task title
  const [title, setTitle] = useState("");

  // State for task description
  const [description, setDescription] = useState("");

  // State for task due date
  const [dueDate, setDueDate] = useState("");

  // Populate form fields when editing a task
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setDueDate(editingTask.dueDate || "");
    }
  }, [editingTask]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate title field
    if (!title.trim()) {
      alert("Task title is required");
      return;
    }

    // Update existing task
    if (isEditing) {
      updateTask({
        ...editingTask,
        title: title.trim(),
        description: description.trim(),
        dueDate,
      });
    }
    // Create new task
    else {
      addTask({
        title: title.trim(),
        description: description.trim(),

        // Set current date as task start date
        startDate: new Date()
          .toISOString()
          .split("T")[0],

        dueDate,
      });
    }

    // Reset form fields after submission
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-8">

      {/* Form Heading */}
      <h2 className="text-xl font-semibold mb-4">
        {isEditing ? "Edit Task" : "Add New Task"}
      </h2>

      {/* Task Form */}
      <form onSubmit={handleSubmit}>

        {/* Task Title Input */}
        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="Task Title *"
          className="w-full border p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Task Description Input */}
        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          placeholder="Task Description"
          rows="3"
          className="w-full border p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Due Date Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Due Date
          </label>

          <input
            type="date"
            value={dueDate}
            onChange={(e) =>
              setDueDate(e.target.value)
            }
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`text-white px-6 py-3 rounded-lg transition ${
            isEditing
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isEditing
            ? "Update Task"
            : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;