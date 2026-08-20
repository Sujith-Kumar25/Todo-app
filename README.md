# Todo App

A simple and responsive **Todo List application** built with **React, Vite, and Tailwind CSS**. The application allows users to add tasks, delete individual tasks, view the current number of pending tasks, and clear all tasks with confirmation.

## Features

- Add new todo tasks
- Prevent empty tasks from being added
- Display all pending tasks in a clean list
- Delete individual tasks
- Display the total number of pending tasks
- Clear all tasks at once
- Confirmation before deleting all tasks
- Responsive layout for different screen sizes
- Modern gradient background and card-based UI
- Fast development experience using Vite
- Tailwind CSS utility classes for styling

## Tech Stack

### Frontend

- **React 19** – Component-based UI development
- **Vite 7** – Development server and production build tool
- **Tailwind CSS 4** – Utility-first CSS framework
- **JavaScript (ES Modules)**

### Development Tools

- ESLint
- React Hooks ESLint plugin
- React Refresh
- npm

## Project Structure

```text
todo-app/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## How It Works

The application uses React's `useState` hook to manage the todo input and task list.

### Adding a Task

1. The user enters a task in the input field.
2. The `addTask()` function checks whether the input contains meaningful text.
3. The task is added to the `todos` state array.
4. The input field is cleared.

### Deleting a Task

Each task has a **Delete** button. When clicked, the application creates a new array using `filter()` and removes the selected task.

### Clearing All Tasks

The **Clear All** button appears when at least one task exists. Before removing all tasks, the application asks the user for confirmation.

### Task Counter

The application dynamically displays the number of pending tasks using the length of the `todos` array.

## State Management

The project currently uses React's built-in `useState` hook.

```jsx
const [task, setTask] = useState("");
const [todos, setTodos] = useState([]);
```

- `task` stores the current input value.
- `todos` stores the list of tasks.

No external state-management library or backend is required.

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

You can verify the installation with:

```bash
node --version
npm --version
```

### 1. Clone the Repository

```bash
git clone <repository-url>
cd todo-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal, normally similar to:

```text
http://localhost:5173
```

Open the URL in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint checks |

## Production Build

To create an optimized production build:

```bash
npm run build
```

The generated files are placed in the `dist/` directory.

To preview the production build:

```bash
npm run preview
```

## UI Overview

The interface consists of:

1. **Todo App Header** – Application title.
2. **Task Input** – Text field for entering a new task.
3. **Add Button** – Adds the entered task.
4. **Todo List** – Displays all pending tasks.
5. **Delete Button** – Removes an individual task.
6. **Task Counter** – Shows the number of pending tasks.
7. **Clear All Button** – Removes every task after confirmation.

## Current Limitations

This project is intentionally implemented as a simple frontend application.

- Tasks are stored only in React state.
- Refreshing the browser removes all tasks.
- There is no database.
- There is no user authentication.
- Tasks cannot currently be edited.
- Tasks cannot be marked as completed.
- There are no task categories, priorities, or due dates.
- There is no backend API.

## Possible Future Improvements

The application can be extended with:

- LocalStorage persistence
- Edit task functionality
- Complete/incomplete task status
- Task filtering
- Search functionality
- Task priority
- Due dates and reminders
- Dark mode
- Drag-and-drop task ordering
- Backend REST API
- Database integration
- User authentication
- Cloud deployment
- Unit and component testing

## Application Flow

```text
User enters task
       ↓
Click "Add"
       ↓
Validate input
       ↓
Add task to React state
       ↓
Render task in list
       ↓
 ┌───────────────┐
 │               │
Delete        Clear All
 │               │
 ↓               ↓
Remove task   Confirmation
                 ↓
              Remove all
```

## Code Highlights

### Add Task

```jsx
const addTask = () => {
  if (task.trim() === "") return;
  setTodos([...todos, task]);
  setTask("");
};
```

The input is trimmed to prevent blank tasks from being added.

### Delete Task

```jsx
const deleteTask = (index) => {
  const newTodos = todos.filter((_, i) => i !== index);
  setTodos(newTodos);
};
```

The selected task is removed without mutating the existing state array.

### Clear All

```jsx
const clearAll = () => {
  const cn = confirm("Are you sure want to delete all tasks?");
  if (cn) {
    setTodos([]);
  }
};
```

The user must confirm before all tasks are removed.

## Deployment

Because this is a Vite-based React application, it can be deployed to static hosting platforms such as:

- Vercel
- Netlify
- Render Static Sites
- GitHub Pages

For deployment, first create the production build:

```bash
npm run build
```

The hosting platform should serve the generated `dist/` directory.

## Learning Outcomes

This project demonstrates fundamental frontend development concepts including:

- React functional components
- React `useState`
- Event handling
- Controlled form inputs
- Array operations with `map()` and `filter()`
- Conditional rendering
- Component styling with Tailwind CSS
- Vite development and production workflows
- Basic ESLint configuration

## License

This project is intended for learning and demonstration purposes. You may modify and extend it for your own projects.
