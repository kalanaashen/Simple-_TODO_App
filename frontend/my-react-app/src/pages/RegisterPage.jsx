import React from 'react'

export const RegisterPage = () => {
  return (
    <div>
      <div className=" flex justify-center gap-4 pt-25 ">
        <div className="flex flex-col justify-items justify-center items-center gap-4 pt-10 border border-pink-600 rounded-4xl min-w-lg bg-pink-50  ">
          <h1 className="font-semibold text-2xl text-pink-700 ">Register Page</h1>
          <div className="gap-4 flex flex-col">
            <label className="font-bold text-pink-900 ">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="border-2 border-pink-400 max-w-lg rounded-2xl pl-2.5"
            />
          </div>
          <div className="flex flex-col ">
            <label className="font-bold text-pink-900">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 border-pink-400 max-w-lg rounded-2xl"
            />
          </div>

          <div className="gap-3 py-10 ">
            <button className="px-2 py-1 text-white font-semibold rounded-2xl bg-pink-500 min-w-xs hover:scale-105 duration-200">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
