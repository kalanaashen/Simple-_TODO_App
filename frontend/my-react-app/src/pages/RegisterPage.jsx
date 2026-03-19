import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    phonenumber: "",
    password: "",
  });

  const submitForm = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/register/",
        formData,
      );
      alert("registration succuessful!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("error happens while register");
      if (error.response?.data?.username) {
        alert(error.response.data.username[0]);
      } else {
        alert("Registration failed ❌");
      }
    }
    setFormData({
      username: "",
      phonenumber: "",
      password: "",
    });
  };
  return (
    <div>
      <div className=" flex justify-center gap-4 pt-25 ">
        <div className="flex flex-col justify-items justify-center items-center gap-4 pt-10 border border-pink-600 rounded-4xl min-w-lg bg-pink-50  ">
          <h1 className="font-semibold text-2xl text-pink-700 ">
            Register Page
          </h1>
          <div className="gap-4 flex flex-col">
            <label className="font-bold text-pink-900 ">User Name</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="border-2 border-pink-400 max-w-lg rounded-2xl pl-2.5"
            />
          </div>
          <div className="gap-4 flex flex-col">
            <label className="font-bold text-pink-900 ">Phone Number</label>
            <input
              type="text"
              name="phonenumber"
              id="phonenumber"
              value={formData.phonenumber}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="border-2 border-pink-400 max-w-lg rounded-2xl pl-2.5"
            />
          </div>
          <div className="flex flex-col ">
            <label className="font-bold text-pink-900">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="border-2 border-pink-400 max-w-lg rounded-2xl"
            />
          </div>

          <div className="gap-3 py-10 ">
            <button
              className="px-2 py-1 text-white font-semibold rounded-2xl bg-pink-500 min-w-xs hover:scale-105 duration-200"
              onClick={submitForm}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
