import { useState, useEffect } from "react";
import Stats from "../components/Stats";
import TaskForm from "../components/TaskForm";
import FilterBar from "../components/FilterBar";
import TaskList from "../components/TaskList";
import API from "../services/api";

const Home = () => {
  // Search input state
  const [search, setSearch] = useState("");

  // Filter state (all, active, completed)
  const [filter, setFilter] = useState("all");

  // Stores the task currently being edited
  const [editingTask, setEditingTask] = useState(null);

  // Tracks whether edit mode is active
  const [isEditing, setIsEditing] = useState(false);

  // Stores all tasks fetched from backend
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks from API
  const fetchTasks = async () => {
    try {
      const res = await API.get("/");
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Load tasks when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  // Add a new task
  const addTask = async (task) => {
    try {
      await API.post("/", task);
      fetchTasks(); // Refresh task list
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Set task data for editing
  const editTask = (task) => {
    setEditingTask(task);
    setIsEditing(true);
  };

  // Update an existing task
  const updateTask = async (updatedTask) => {
    try {
      await API.put(`/${updatedTask.id}`, updatedTask);

      fetchTasks(); // Refresh task list

      // Reset edit mode
      setEditingTask(null);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Toggle task completion status
  const toggleTask = async (id) => {
    try {
      await API.patch(`/${id}/toggle`);
      fetchTasks();
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  // Delete a task after confirmation
  const deleteTask = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Apply search and filter logic
  const filteredTasks = tasks.filter((task) => {
    // Check if task title matches search text
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    // Check filter condition
    const matchesFilter =
      filter === "all"
        ? true
        : filter === "active"
        ? !task.completed
        : task.completed;

    return matchesSearch && matchesFilter;
  });

  // Handle drag-and-drop reordering
  const handleDragEnd = (result) => {
    // Exit if item is dropped outside droppable area
    if (!result.destination) return;

    // Create a copy of tasks array
    const items = [...tasks];

    // Remove dragged item from old position
    const [reorderedItem] = items.splice(
      result.source.index,
      1
    );

    // Insert item at new position
    items.splice(
      result.destination.index,
      0,
      reorderedItem
    );

    // Update task order in state
    setTasks(items);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto p-6">
        
        {/* Application Title */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Personal Task Manager
        </h1>

        {/* Task Statistics Section */}
        <Stats tasks={tasks} />

        {/* Add/Edit Task Form */}
        <TaskForm
          addTask={addTask}
          updateTask={updateTask}
          editingTask={editingTask}
          isEditing={isEditing}
        />

        {/* Search and Filter Controls */}
        <FilterBar
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />

        {/* Task List with Drag & Drop Support */}
        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
          handleDragEnd={handleDragEnd}
        />
      </div>
    </div>
  );
};

export default Home;