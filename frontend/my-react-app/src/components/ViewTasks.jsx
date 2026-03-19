import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "./Form";
import {
  getTasks,
  createTask,
  deleteTaskApi,
  completeTask,
} from "../api/taskApi";
export const ViewTasks = () => {
  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    is_completed: false,
  });

  const clearForm = () => {
    setFormData({
      title: "",
      description: "",
      is_completed: false,
    });
  };
const fetchTasks = () => {
  getTasks()
    .then((res) => setTasks(res.data))
    .catch(console.error);
};
  useEffect(()=>{
    
    fetchTasks();

  },[]);
const deleteTask = (taskId) => {
  deleteTaskApi(taskId)
    .then(fetchTasks)
    .catch(console.error);
};
const markAsCompleted = (taskId) => {
  completeTask(taskId)
    .then(fetchTasks)
    .catch(console.error);
};

const handleSubmit = (e) => {
  e.preventDefault();

  createTask(formData)
    .then(() => {
      fetchTasks();
      alert("Task added successfully!");
    })
    .catch((error) => {
      console.error(error.response?.data);
    });
};
  return (
    <div className=" ">
      <div>
        <Form
          handleSubmit={handleSubmit}
          clearForm={clearForm}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
      <div className="text-lg text-pink-600 font-bold text-center py-10">
        TO DO Tasks
      </div>

      <table className="border  border-pink-300 rounded-2xl w-2xl p-2.5 mx-auto ">
        <thead className="p-4  mx-auto bg-pink-100">
          <tr>
            <th className="p-3">Title</th>
            <th className="p3">Description</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody className="text-center ">
          {tasks.map((task, index) => (
            <tr key={index} className="hover:bg-pink-50 ">
              <td className={`p-3 ${task.is_completed ? "line-through" : ""}`}>
                {task.title}
              </td>
              <td className={`p-3 ${task.is_completed ? "line-through" : ""}`}>
                {task.description}
              </td>
              <td className="p-3 flex flex-row justify-evenly">
                <div>
                  <button
                    disabled={task.is_completed}
                    className={` ${task.is_completed ? "bg-gray-300 hover:bg-gray-700 cursor-not-allowed" : " hover:scale-110 bg-pink-500 hover:bg-pink-600 duration-300"}   rounded-2xl font-semibold text-white py-1 px-2 rounded`}
                    onClick={() => markAsCompleted(task.id)}
                  >
                    Mark as Completed
                  </button>
                </div>
                <div>
                  <button
                    className="bg-gray-500 hover:bg-gray-600  hover:scale-110 duration-300 rounded-2xl font-semibold text-white py-1 px-2 rounded"
                    onClick={() => {
                      deleteTask(task.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
