import { div } from "framer-motion/client";
import React, { useState } from "react";

const Eatt = () => {

    const [totalCalories, setTotalCalories] = useState(0);

  // Taomlar, ichimliklar, mevalar (kaloriya bilan)
  const foods = [
    { name: "Osh", calories: 450 },
    { name: "Palov", calories: 500 },
    { name: "Xonim", calories: 400 },
  ];

  const drinks = [
    { name: "Suv", calories: 0 },
    { name: "So'k", calories: 70 },
    { name: "Choy", calories: 10 },
  ];

  const fruits = [
    { name: "Olma", calories: 80 },
    { name: "Banan", calories: 120 },
    { name: "Uzum", calories: 90 },
  ];

  // Bosilganda qo‘shib borish
  const handleClick = (cal) => {
    setTotalCalories(totalCalories + cal);
  };

  // Tozalash tugmasi
  const handleReset = () => {
    setTotalCalories(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-blue-100 to-purple-200">
        <div className="p-6 pt-24 px-[150px]">
      {/* Tepada Tozalash tugmasi */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Tozalash
        </button>
      </div>

      {/* 1-qator: Taomlar */}
      <p className="text-4xl font-semibold text-center text-green-500 py-3">Taomlar</p>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border p-4 rounded-xl text-center cursor-pointer hover:bg-green-100 bg-white"
            onClick={() => handleClick(item.calories)}
          >
            {item.name} <br />
            <span className="text-sm text-gray-500">{item.calories} kcal</span>
          </div>
        ))}
      </div>

      {/* 2-qator: Ichimliklar */}
      <p className="text-4xl font-semibold text-center text-green-500 py-3">Ichimliklar</p>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {drinks.map((item, index) => (
          <div
            key={index}
            className="border p-4 rounded-xl text-center cursor-pointer hover:bg-blue-100 bg-white"
            onClick={() => handleClick(item.calories)}
          >
            {item.name} <br />
            <span className="text-sm text-gray-500">{item.calories} kcal</span>
          </div>
        ))}
      </div>

      {/* 3-qator: Mevalar */}
      <p className="text-4xl font-semibold text-center text-green-500 py-3">Mevalar</p>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {fruits.map((item, index) => (
          <div
            key={index}
            className="border p-4 rounded-xl text-center cursor-pointer hover:bg-yellow-100 bg-white"
            onClick={() => handleClick(item.calories)}
          >
            {item.name} <br />
            <span className="text-sm text-gray-500">{item.calories} kcal</span>
          </div>
        ))}
      </div>

      {/* Jami kaloriyalar oxirida */}
      <div className="mt-6 p-4 border rounded-xl text-center font-bold text-lg bg-green-400 text-white">
        Jami kaloriya: {totalCalories} kcal
      </div>
    </div>
    </div>
  )
}

export default Eatt