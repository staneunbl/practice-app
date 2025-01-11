import "../App.css";
import React, { useState } from "react";

function TaskManager() {
  const [tasks, setTaskManager] = useState<string[]>([]);
  const [taskInputManager, setTaskInputManager] = useState<string>("");
  const [editingIndexManager, ManagersetEditingIndex] = useState<number | null>(
    null
  );
  const [currentEditingIndex, setCurrentEditingIndex] = useState<number | null>(
    null
  ); // Index of task being edited

  const addTaskManager = () => {
    if (taskInputManager.trim() === "") return;
    setTaskManager([...tasks, taskInputManager]);
    console.log(taskInputManager);
    setTaskInputManager("");
  };

  const handleTaskChange = (event) => {
    setTaskInputManager(event.target.value);
  };

  const deleteTaskManager = (index: number) => {
    setTaskManager(tasks.filter((task, taskIndex) => taskIndex !== index));
  };

  const updateTaskManager = (index: number) => {
    if (editingIndexManager === null || taskInputManager.trim() === "") return;
    const updatedManagerTask = tasks.map(
      (task, i) => (i === index ? taskInputManager : task) // Replace task with the updated input value
    );
    const updatedTasks = [...tasks];
    updatedTasks[editingIndexManager] = taskInputManager; // Update task at the editing index
    setTaskManager(updatedManagerTask);
    ManagersetEditingIndex(null);
    setTaskInputManager("");
  };

  const handleEditTask = (index: number) => {
    ManagersetEditingIndex(index);
    setTaskInputManager(tasks[index]);
    setCurrentEditingIndex(index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Task Manager</h1>

      {/* Task Input Section */}
      <div className="flex mb-6">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task"
          onChange={handleTaskChange}
          value={taskInputManager}
        />
        <button
          onClick={addTaskManager}
          className="bg-blue-500 text-white p-3 rounded-r-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>

      {/* MAPPED Task List Section */}
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center">
              <input type="checkbox" className="mr-4 rounded border-gray-300" />

              {editingIndexManager === index ? (
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-l-md"
                  value={taskInputManager}
                  onChange={handleTaskChange}
                />
              ) : (
                <span key={index} className="text-gray-900">
                  {task}
                </span>
              )}
            </div>
            <div>
              <button
                onClick={() => handleEditTask(index)}
                className="bg-orange-500 text-white p-2 rounded ml-1"
              >
                Update
              </button>
              <button
                onClick={() => deleteTaskManager(index)}
                className="bg-red-500 text-white p-2 rounded ml-1"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
