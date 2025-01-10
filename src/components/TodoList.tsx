import React, { useState } from "react";
import "../App.css";

function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]); // store all tasks, string value
  const [taskInput, setTaskInput] = useState<string>(""); // store current input value, string value

  // Adding a new task
  const addTask = () => {
    if (taskInput.trim() === "") return; // don't add empty value, prevents adding
    setTasks([...tasks, taskInput]); // add a new task
    console.log("Updated tasks:", [...tasks, taskInput]);
    setTaskInput(""); // clear input field after adding a task
  };

  const handleTaskChange = (event) => {
    setTaskInput(event.target.value); // Update taskInput state
  };

  const deleteTask = (taskToDelete: string) => {
    setTasks(tasks.filter((task) => task !== taskToDelete)); // filter the tasks array to remove task
  };

  return (
    <section className="container mx-auto px-8 py-28 sm:px-12">
      <h1 className="sm:mb-18 mb-24 w-full text-center text-4xl font-bold dark:text-slate-50 sm:mx-auto sm:w-4/5">
        TO DO APP LIST
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input section for adding tasks */}
        <div className="flex space-x-2">
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-lg w-full"
            value={taskInput}
            placeholder="Please enter a task"
            onChange={handleTaskChange}
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white p-3 rounded-lg"
          >
            Add
          </button>
        </div>

        {/* To-Do List Section */}
        <div className="space-y-4 mt-8 pb-3">
          <ul>
            {tasks.map((task, index) => (
              <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-3">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span key={index} className="text-gray-700">
                    {task}
                  </span>
                </div>
                <button
                  onClick={() => deleteTask(task)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>

          {/* More tasks can be added in the same structure */}
        </div>
      </div>
    </section>
  );
}

export default TodoList;
