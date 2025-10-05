import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const clearAll = () => {
    let cn = confirm("Are you sure want to delete all tasks? ");
    if(cn){
      setTodos([]);
    }
    else{
      alert("Deletion Cancelled!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-300 to-indigo-500 p-4">
      <div className="bg-white rounded-xl shadow-xl/30 w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Todo App</h1>

        
        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add your new todo"
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={addTask}
            className="bg-purple-600 text-white px-4 rounded-r-md hover:bg-purple-700 transition-all duration-200"
          >
            Add
          </button>
        </div>

      
        <ul className="space-y-3 mb-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-md"
            >
              <span className="text-gray-800">{todo}</span>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-all duration-200"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

      
        {todos.length > 0 && (
          <div className="flex justify-between items-center">
            <p className="text-gray-600">You have {todos.length} pending tasks</p>
            <button
              onClick={clearAll}
              className="bg-purple-600 text-white px-4 py-1 rounded-md hover:bg-purple-700 transition-all duration-200"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
