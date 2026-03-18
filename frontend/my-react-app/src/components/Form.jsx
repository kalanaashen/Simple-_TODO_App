import React from "react";

export const Form = ({ handleSubmit, clearForm, formData, setFormData }) => {

  return (
    <div>
      <div className="flex flex-col gap-4 pt-10 items-center justify-center  ">
        <div className="flex flex-row gap-x-2 ">
          <label className="text-2xl font-medium text-pink-600">Task</label>
          <input
            type="text"
            className="border-2 border-pink-300 rounded-xl w-2xl p-2.5 focus:outline-none focus:ring-2 focus:ring-pink-300"
            name="title"
            value={formData.title}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
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
            value={formData.description}
            name="description"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
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
            checked={formData.is_complete}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.checked });
            }}
            name="is_complete"
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
