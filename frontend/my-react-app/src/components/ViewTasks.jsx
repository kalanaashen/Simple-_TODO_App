import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "./Form";
export const ViewTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [isComplete, setIsComplete] = useState(false);


  
  const clearForm = () => {
    setTask("");
    setDescription("");
    setIsComplete(false);
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
      .patch(`http://localhost:8000/todos/${taskId}/`, { is_complete: true })
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
    const newtask = {
      title: task,
      description: description,
      user: 1,
      is_complete: isComplete,
    };
    axios
      .post("http://localhost:8000/todos/", newtask)
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
        <Form handleSubmit={handleSubmit} clearForm={clearForm}  task={task} setTask={setTask} setDescription={setDescription} isComplete={setIsComplete} description={description} isComplete={isComplete} />
      </div>
      <div className="text-4xl text-pink-600 font-bold text-center py-10">
        Tasks
      </div>

      <table className="border  border-pink-300 rounded-2xl w-2xl p-2.5 mx-auto ">
        <thead className="p-4  mx-auto bg-pink-100">
          <tr>
            <th className="p-6">Title</th>
            <th className="p-6">Description</th>
            <th className="p-6">Status</th>
          </tr>
        </thead>
        <tbody className="text-center ">
          {tasks.map((task, index) => (
            <tr key={index} className="hover:bg-pink-50 ">
              <td className="p-6">{task.title}</td>
              <td className="p-6">{task.description}</td>
              <td className="p-6">
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
