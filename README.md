# Personal Task Manager

## Project Description

Personal Task Manager is a full-stack web application that allows users to create, manage, update, and track their daily tasks efficiently. Users can add tasks with a title, description, and due date, mark tasks as completed, edit existing tasks, delete tasks, search tasks by title, and filter tasks based on their completion status.

The application is built using React for the frontend and Node.js with Express for the backend. Task data is stored in a JSON file, providing persistent storage without requiring a database.

---

## Features

* Create Tasks
* View Tasks
* Edit Tasks
* Delete Tasks
* Mark Tasks as Complete/Incomplete
* Search Tasks by Title
* Filter Tasks (All, Active, Completed)
* Task Statistics Dashboard
* Overdue Task Highlighting
* Persistent Storage using JSON File

---

## Tech Stack

### Frontend

* React
* Vite
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Storage

* JSON File

---

## Project Structure

task-manager/

├── client/

│   ├── src/

│   ├── public/

│   └── package.json

│

├── server/

│   ├── controllers/

│   ├── routes/

│   ├── data/

│   ├── index.js

│   └── package.json

│

└── README.md

---

## API Endpoints

### Get All Tasks

GET /api/tasks

### Create Task

POST /api/tasks

### Update Task

PUT /api/tasks/:id

### Toggle Task Status

PATCH /api/tasks/:id/toggle

### Delete Task

DELETE /api/tasks/:id

---

## How to Run Locally

### Backend

cd server

npm install

npm run dev

### Frontend

cd client

npm install

npm run dev

---

## Future Improvements

* User Authentication
* Database Integration (MongoDB/PostgreSQL)
* Drag and Drop Task Reordering
* Dark Mode
* Notifications
* Deployment on Vercel and Render
