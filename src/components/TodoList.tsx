import React, { useState } from "react";
import "../App.css";

function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]); // store all tasks, string value
  const [taskInput, setTaskInput] = useState<string>(""); // store current input value, string value
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [checkedTaskIndices, setCheckedTaskIndices] = useState<number[]>([]);

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
    const taskCount = tasks.filter((task) => task === taskToDelete).length;

    if (taskCount === 1) {
      setTasks(tasks.filter((task) => task !== taskToDelete));
    } else {
      alert("You can only delete one task at a time!");
    }
  };

  const updateTask = (index, number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? taskInput : task
    );
    setTasks(updatedTasks);
    setEditingIndex(null); // Reset editing mode after update
    setTaskInput(""); // Clear the input field
  };

  const editTask = (index, number) => {
    setEditingIndex(index);
    setTaskInput(tasks[index]);
  };

  // const checkBox = (taskToCheck: string) => {
  //   const updatedCheckedTasks = new Set(checkedTasks);

  //   if (updatedCheckedTasks.has(taskToCheck)) {
  //     updatedCheckedTasks.delete(taskToCheck);
  //   } else {
  //     updatedCheckedTasks.add(taskToCheck);
  //   }
  //   setCheckedTasks(updatedCheckedTasks);
  // };

  const checkBox = (index: number) => {
    setCheckedTaskIndices((prevCheckedIndices) => {
      // If the task is already checked, remove it from the array
      if (prevCheckedIndices.includes(index)) {
        return prevCheckedIndices.filter((i) => i !== index);
      } else {
        // Otherwise, add the task index to the array
        return [...prevCheckedIndices, index];
      }
    });
  };

  return (
    <section className="container mx-auto px-8 py-28 sm:px-12">
      <h1 className="sm:mb-18 mb-24 w-full text-center text-4xl font-bold dark:text-slate-500 sm:mx-auto sm:w-4/5">
        TO DO APP LIST
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input section for adding tasks */}
        <div className="flex space-x-2">
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-lg w-full h-12"
            value={taskInput}
            placeholder={
              editingIndex !== null
                ? "Update your Task!"
                : "Please enter a task"
            }
            onChange={handleTaskChange}
          />
          <button
            onClick={() =>
              editingIndex !== null
                ? updateTask(editingIndex, taskInput)
                : addTask()
            }
            className="bg-blue-500 text-white p-3 rounded-lg h-12"
          >
            {editingIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        {/* To-Do List Section */}
        <div className="space-y-4 mt-8 pb-3">
          <ul>
            {tasks.map((task, index) => (
              <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={checkedTaskIndices.includes(index)} // Check if the task is in the checked list
                    onChange={() => checkBox(index)} // Toggle task checked state
                    className="mr-3"
                  />
                  <span
                    key={index}
                    className={
                      checkedTaskIndices.includes(index)
                        ? "line-through text-gray-400"
                        : ""
                    }
                  >
                    {task}
                  </span>
                </div>

                <div>
                  <button
                    onClick={() => editTask(index, taskInput)}
                    className="bg-orange-500 text-white p-2 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteTask(task)}
                    className="bg-red-500 text-white p-2 rounded ml-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TodoList;
