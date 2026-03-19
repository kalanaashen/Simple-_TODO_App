import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
export const Loginpage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const submitForm = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login", formData);

      localStorage.setItem("authToken", res.data.access);

      console.log(localStorage.getItem("authToken")); 

      setFormData({ username: "", password: "" });

      navigate("/todos");
    } catch {
      alert("error login");
    }
  };

  return (
    <div>
      <div className=" flex justify-center gap-4 pt-25 ">
        <div className="flex flex-col justify-items justify-center items-center gap-4 pt-10 border border-pink-600 rounded-4xl min-w-lg bg-pink-50  ">
          <h1 className="font-semibold text-2xl text-pink-700 ">Login Page</h1>
          <div className="gap-4 flex flex-col">
            <label className="font-bold text-pink-900 ">User Name</label>
            <input
              type="text"
              name="username"
              id="phone"
              className="border-2 border-pink-400 max-w-lg rounded-2xl pl-2.5"
              value={formData.username}
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col ">
            <label className="font-bold text-pink-900">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 border-pink-400 max-w-lg rounded-2xl"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
            />
          </div>

          <div className="gap-3 py-10 ">
            <button
              className="px-2 py-1 text-white font-semibold rounded-2xl bg-pink-500 min-w-xs hover:scale-105 duration-200"
              onClick={submitForm}
            >
              Login
            </button>
          </div>
          <div className="flex flex-row  gap-1.5">
            <h1>Dont have Account?</h1>
            <a
              href="/register"
              className="text-pink-700 hover:text-blue-800 cursor:pointer"
            >
              Register Here!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
