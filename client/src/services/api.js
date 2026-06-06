import axios from "axios";

// Use the Render URL in production, and localhost for development
const baseURL = process.env.NODE_ENV === 'production' 
  ? "https://taskmanager-backend-gduh.onrender.com/api/tasks" 
  : "http://localhost:5000/api/tasks";

const API = axios.create({
  baseURL: baseURL,
});

export default API;