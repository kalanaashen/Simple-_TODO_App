import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("authToken");

    navigate("/");
  };

  return (
    <div className="w-full bg-linear-to-b from-pink-300 to-pink-400 h-[80px] rounded-b-lg">
      <div className="flex  items-center justify-between h-full">
        <div>
          <h1 className="text-2xl font-bold text-white ">
            TODO <span className="text-pink-900">Application</span>
          </h1>
        </div>
        <div className="">
          <button
            className="p-2 bg-pink-500 rounded-xl text-white 
hover:bg-pink-900 
focus:outline-none focus:ring-2 focus:ring-pink-300 
hover:ring-2 hover:ring-pink-200 
transition duration-200"
            onClick={handlelogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
