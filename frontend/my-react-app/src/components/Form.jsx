import React from "react";
import { useState } from "react";
import axios from "axios";
export const Form = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newtask = {
      title: task,
      description: description,
      user:1,
      is_complete: isComplete,
    };
    axios
      .post("http://localhost:8000/todos/", newtask)
      .then((response) => {
        console.log(response.data);
        alert("Task added successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to add task. Please try again.");
      });
  };

  const clearForm = () => {
    setTask("");
    setDescription("");
    setIsComplete(false);
  };
  return (
    <div>
      <div className="flex flex-col gap-4 pt-10 items-center justify-center  ">
        <div className="flex flex-row gap-x-2 ">
          <label className="text-2xl font-medium text-pink-600">Task</label>
          <input
            type="text"
            className="border-2 border-pink-300 rounded-xl w-2xl p-2.5 focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row gap-x-2">
          <label className="text-2xl font-medium text-pink-600">
            Description
          </label>
          <textarea
            cols={50}
            rows={10}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className=" border-2 border-pink-300 rounded-3xl p-2.5 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>
        <div className="flex flex-row gap-x-2 ">
          <label className="text-2xl font-medium text-pink-600">
            Is it Complete
          </label>
          <input
            type="checkbox"
            checked={isComplete}
            onChange={(e) => {
              setIsComplete(e.target.checked);
            }}
            className="border border-pink-300 rounded-2xl size-10 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <div>
          <button
            className="bg-pink-500 text-white font-bold py-4 px-6 rounded-full hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2"
            onClick={handleSubmit}
          >
            Add Task
          </button>
          <button
            className="bg-gray-300 text-gray-700 font-bold py-4 px-6 rounded-full hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 ml-4"
            onClick={clearForm}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
