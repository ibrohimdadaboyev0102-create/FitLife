import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Dot,
} from "recharts";

const Bmi = () => {

    const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState(null);

  // BMI hisoblash funksiyasi
  const calculateBMI = () => {
    if (!height || !weight) return;

    const h = height / 100; // sm -> metr
    const bmi = (weight / (h * h)).toFixed(1);
    const today = new Date().toLocaleDateString("uz-UZ");

    // BMI tarixi
    setHistory([...history, { date: today, bmi: Number(bmi) }]);

    // Kategoriya aniqlash
    let category = "";
    let advice = "";
    if (bmi < 18.5) {
      category = "Ozish (Ozginlik)";
      advice = "🥗 Ko‘proq to‘yimli ovqatlar va oqsil qabul qiling!";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal";
      advice = "✅ Sog‘lom turmush tarzini davom ettiring!";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Ortiqcha vazn";
      advice = "🏃‍♂️ Jismoniy faollikni oshiring va parhezga e’tibor bering!";
    } else {
      category = "Semizlik (Obez)";
      advice = "⚠️ Shifokor bilan maslahatlashib, maxsus parhez tuting!";
    }

    setResult({ bmi, category, advice });
  };

  // Tarixni tozalash
  const clearHistory = () => {
    setHistory([]);
    setResult(null);
  };

  return (
    <div>
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-green-300 to-blue-400 p-6">
      <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          BMI Kalkulyatori
        </h1>

        {/* Inputlar */}
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Bo'yingiz (cm)"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Vazningiz (kg)"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <button
            onClick={calculateBMI}
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-xl font-semibold shadow hover:opacity-90 transition"
          >
            Hisoblash
          </button>
        </div>

        {/* Natija kartochkasi */}
        {result && (
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow text-center">
            <h2 className="text-lg font-semibold">
              Sizning BMI:{" "}
              <span className="text-green-600 font-bold">{result.bmi}</span>
            </h2>
            <p className="text-black font-medium mt-1">{result.category}</p>
            <p className="mt-2 text-gray-800">{result.advice}</p>
          </div>
        )}

        {/* Grafik */}
        <div className="mt-6 bg-white/40 p-4 rounded-xl">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-green-900">BMI Tarixi</h2>
            <button
              onClick={clearHistory}
              className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
            >
              Tozalash
            </button>
          </div>

          <div className="w-full h-64">
            <ResponsiveContainer>
              <LineChart data={history}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 40]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="bmi"
                  stroke="#22c55e"
                  strokeWidth={3}
                  dot={<Dot r={5} fill="green" />}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Bmi