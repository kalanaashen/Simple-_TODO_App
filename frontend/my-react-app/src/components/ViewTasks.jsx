import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "./Form";
export const ViewTasks = () => {
  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    is_complete: false,
  });

  const clearForm = () => {
    setFormData({
      title: "",
      description: "",
      is_complete: false,
    });
  };

  const fetchTasks = () => {
    axios
      .get("http://localhost:8000/todos/")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const deleteTask = (taskId) => {
    axios.delete(`http://localhost:8000/todos/${taskId}/`).then((response) => {
      console.log(response.data);
      fetchTasks();
    });
  };
  const markAsCompleted = (taskId) => {
    axios
      .patch(`http://localhost:8000/todos/${taskId}/`, {
        ...formData,
        is_complete: true,
      })
      .then((response) => {
        console.log(response.data);
        deleteTask(taskId);
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
      .post("http://localhost:8000/todos/", formData)
      .then((response) => {
        console.log(response.data);
        fetchTasks();
        alert("Task added successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to add task. Please try again.");
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
        Tasks
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
              <td className="p-3">{task.title}</td>
              <td className="p-3">{task.description}</td>
              <td className="p-3">
                <button
                  className={`bg-pink-500 hover:bg-pink-600  hover:scale-110 duration-300 rounded-2xl font-medium text-white py-2 px-4 rounded`}
                  onClick={() => markAsCompleted(task.id)}
                >
                  Mark as Completed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
