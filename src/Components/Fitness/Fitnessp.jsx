import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Fitnessp = () => {

  const items = [
    "10 daqiqa badan tarbiya qilish",
    "200-400 m yugurish",
    "1 km yurish",
    "5-10 marta turnikga osilish",
    "10-15 marta yotib-turish (otjimaniya)",
    "15-20 marta o'tirib turish",
  ];

  const [checked, setChecked] = useState(Array(items.length).fill(false));

  const toggleCheck = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const count = checked.filter(Boolean).length;

  return (
    <div className="">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-200 via-blue-100 to-purple-200 p-6 pt-24">
      <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-4">
          🏋️ Mashqlar ro‘yxati
        </h1>

        <ul className="space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => toggleCheck(index)}
              className="flex items-center cursor-pointer bg-white/50 rounded-lg px-3 py-2 hover:bg-white/70 transition"
            >
              <div
                className={`w-6 h-6 flex items-center justify-center border-2 rounded-md mr-3 ${
                  checked[index]
                    ? "bg-green-500 border-green-500"
                    : "border-gray-400"
                }`}
              >
                {checked[index] && (
                  <span className="text-white font-bold">✔</span>
                )}
              </div>
              <span
                className={`text-lg ${
                  checked[index] ? "line-through decoration-white" : ""
                }`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Pastki hisobchi va status */}
        <div className="mt-6 text-center text-xl font-semibold text-green-700">
          {count}/{items.length}
        </div>

        {count === items.length && (
          <div className="mt-4 text-center text-green-600 font-bold text-lg">
            🎉 Bugungi ertalabki mashqlar bajarildi!
          </div>
        )}
        <div className="border border-white bg-white mt-5 rounded-lg p-1 w-52 text-center">
          <NavLink to={'/f'}>
            <button>
            <p className="text-center">Mashq paytini o'zgartirish</p>
          </button>
          </NavLink>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Fitnessp