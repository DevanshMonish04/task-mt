# Personal Task Manager

A full-stack Task Management application that helps users organize and track their daily tasks efficiently. Users can create, edit, update, delete, search, and filter tasks while viewing task statistics in a clean and responsive interface.

## Live Demo

### Frontend (Netlify)
https://taskmanager-frontendd.netlify.app

### Backend API (Railway)
https://taskmanager-backend-production-abbc.up.railway.app

---

## Features

- Create new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as Complete/Incomplete
- Search tasks by title
- Filter tasks (All, Active, Completed)
- Task Statistics Dashboard
- Overdue Task Detection
- Persistent JSON File Storage
- Responsive User Interface

---

## Tech Stack

### Frontend
- React.js
- Vite
- Axios
- CSS3

### Backend
- Node.js
- Express.js

### Data Storage
- JSON File Storage

### Deployment
- Netlify (Frontend)
- Railway (Backend)

---

## Project Structure

```text
task-manager/
│
├── client/
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── FilterBar.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── data/
│   │   └── tasks.json
│   │
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## File Structure & Working

### Frontend (Client)

---

#### src/components/

##### TaskForm.jsx
- Handles task creation and editing.
- Collects task details such as title, description, due date, and status.
- Sends task data to the backend through API requests.

##### TaskCard.jsx
- Displays individual task information.
- Provides edit, delete, and task status toggle functionality.

##### TaskList.jsx
- Displays all tasks fetched from the backend.
- Renders multiple TaskCard components dynamically.

##### FilterBar.jsx
- Handles task filtering and searching.
- Allows users to filter tasks by All, Active, and Completed status.
- Supports task search by title.

##### Stats.jsx
- Displays task statistics.
- Shows total, completed, pending, and overdue task counts.

---

#### src/pages/

##### Home.jsx
- Main application page.
- Integrates TaskForm, FilterBar, Stats, and TaskList components.

---

#### src/services/

##### api.js
- Centralized Axios API configuration.
- Handles all backend communication.
- Contains functions for fetching, creating, updating, and deleting tasks.

---

#### Root Frontend Files

##### App.jsx
- Root React component.
- Defines overall application layout and structure.

##### main.jsx
- Entry point of the React application.
- Renders the App component into the DOM.

##### index.css
- Contains global styles and UI customization.

##### vite.config.js
- Configuration file for Vite development and build process.

##### package.json
- Stores frontend dependencies, scripts, and project metadata.

---

### Backend (Server)

#### controllers/

##### taskController.js
- Contains business logic for task management.
- Handles CRUD operations and task status updates.
- Reads and writes task data to the JSON file.

---

#### routes/

##### taskRoutes.js
- Defines API endpoints.
- Maps incoming requests to controller functions.

---

#### data/

##### tasks.json
- Stores task data persistently.
- Acts as a lightweight database for the application.

---

#### Root Backend Files

##### index.js
- Main Express server file.
- Configures middleware, routes, CORS, and server startup.

##### package.json
- Stores backend dependencies and scripts.

---

## Application Workflow

1. User interacts with the React frontend.
2. Frontend sends requests using Axios through `api.js`.
3. Express routes receive requests through `taskRoutes.js`.
4. Controller functions in `taskController.js` process the request.
5. Task data is read from or written to `tasks.json`.
6. Updated data is returned to the frontend.
7. React components re-render and display the latest task information.

### Architecture Overview

- Components → Presentation Layer
- Services → API Communication Layer
- Routes → Request Routing Layer
- Controllers → Business Logic Layer
- JSON File → Data Storage Layer

---

## API Endpoints

### Get All Tasks

```http
GET /api/tasks
```

### Create Task

```http
POST /api/tasks
```

### Update Task

```http
PUT /api/tasks/:id
```

### Toggle Task Status

```http
PATCH /api/tasks/:id/toggle
```

### Delete Task

```http
DELETE /api/tasks/:id
```

---

## Author

### Devansh Monish

Full Stack Developer

GitHub: https://github.com/DevanshMonish04