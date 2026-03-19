import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "./Form";
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
    axios
      .get("http://localhost:8000/todos/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const deleteTask = (taskId) => {
    axios
      .delete(`http://localhost:8000/todos/${taskId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        fetchTasks();
      });
  };
  const markAsCompleted = (taskId) => {
    axios
      .patch(
        `http://localhost:8000/todos/${taskId}/`,
        {
          is_completed: true,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        },
      )
      .then((response) => {
        console.log(response.data);

        fetchTasks();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/todos/", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        fetchTasks();
        alert("Task added successfully!");
      })
      .catch((error) => {
        console.error("FULL ERROR:", error.response);
        console.log("DATA:", error.response?.data);
        alert(JSON.stringify(error.response?.data));
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
