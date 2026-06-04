import { useState, useEffect } from "react";
import Stats from "../components/Stats";
import TaskForm from "../components/TaskForm";
import FilterBar from "../components/FilterBar";
import TaskList from "../components/TaskList";
import API from "../services/api";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [editingTask, setEditingTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [tasks, setTasks] = useState([]);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await API.get("/");
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add Task
  const addTask = async (task) => {
    try {
      await API.post("/", task);
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Edit Task
  const editTask = (task) => {
    setEditingTask(task);
    setIsEditing(true);
  };

  // Update Task
  const updateTask = async (updatedTask) => {
    try {
      await API.put(
        `/${updatedTask.id}`,
        updatedTask
      );

      fetchTasks();

      setEditingTask(null);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Toggle Complete
  const toggleTask = async (id) => {
    try {
      await API.patch(`/${id}/toggle`);
      fetchTasks();
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  // Delete Task
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

  // Search + Filter
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "active"
        ? !task.completed
        : task.completed;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Personal Task Manager
        </h1>

        <Stats tasks={tasks} />

        <TaskForm
          addTask={addTask}
          updateTask={updateTask}
          editingTask={editingTask}
          isEditing={isEditing}
        />

        <FilterBar
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />

        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
};

export default Home;