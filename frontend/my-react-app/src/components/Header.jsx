import React from "react";

export const Header = () => {
  return (
    <div className="w-full bg-linear-to-b from-pink-300 to-pink-400 h-[60px] rounded-b-2xl">
      <div className="flex justify-center items-center h-full">
        <h1 className="text-2xl font-bold text-white ">TODO <span className="text-pink-900">Application</span></h1>
      </div>
    </div>
  );
};
