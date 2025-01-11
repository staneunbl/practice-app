import React, { useState } from "react";

function TaskTracker() {
  const [taskname, setTaskName] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  
  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  // add task
  const addTaskManager = () => {
    //if (taskname.trim() === "") return;
    if (taskname.trim() !== "") 
        setTasks([...tasks, taskname]);
    //alert(`${taskname}`);
    console.log([taskname]);
    setTaskName("");
  };

  const removeTaskManager = (index: number) => {
    const newTaskList = tasks.filter((taskname, targetIndex) => targetIndex !== index);
    setTasks(newTaskList);
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Task Tracker</h1>

      {/* Input Section */}
      <div className="mb-4 flex">
        <input
          type="text"
          value={taskname}
          onChange={handleTaskNameChange}
          placeholder="Enter task name"
          className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTaskManager}
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
        >
          Add Task
        </button>
      </div>

      {/* Task List Section */}
      <div className="task-list mb-4">
        {taskname.length === 1 ? (
            <p className="text-gray-500 text-center">No tasks yet. Add a new task!</p>
        ) : (
        <ul className="space-y-2">
          {tasks.map((taskname, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 bg-gray-100 rounded-md"
            >
              {taskname}
              <button
                onClick={() => removeTaskManager(index)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        )}
      </div>

      {/* Task Counter */}
      <div className="task-counter text-center">
        <p className="text-lg font-semibold">Total Tasks: </p>
      </div>
    </div> //{tasks.length}
  );
}

export default TaskTracker;
