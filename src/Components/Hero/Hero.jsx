import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-blue-100 to-purple-200 px-[150px] py-10 pt-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-600">
      <Typewriter
        words={['Salomatlik portaliga xush kelibsiz!', 'Saytimizga xush kelibsiz!']}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h1>
      </div>
      <div className="flex gap-6 justify-center mt-10">
      <motion.div
        className="px-6 py-3 bg-white shadow-lg rounded-xl flex items-center gap-3 hover:bg-green-200 hover:duration-1000"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <span>⏰</span>
        <p>Tezkor yordam</p>
      </motion.div>

      <motion.div
        className="px-6 py-3 bg-white shadow-lg rounded-xl flex items-center gap-3 hover:bg-green-200 hover:duration-1000"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <span>🩺</span>
        <p>Mutaxassis parvarishi</p>
      </motion.div>

      <motion.div
        className="px-6 py-3 bg-white shadow-lg rounded-xl flex items-center gap-3 hover:bg-green-200 hover:duration-1000"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.8, repeat: Infinity }}
      >
        <span>🛡️</span>
        <p>Xavfsiz va ishonchli</p>
      </motion.div>

      <motion.div
        className="px-6 py-3 bg-white shadow-lg rounded-xl flex items-center gap-3 hover:bg-green-200 hover:duration-1000"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.8, repeat: Infinity }}
      >
        <span>🦾</span>
        <p>Oxirgi texnologiyalar</p>
      </motion.div>
    </div>

      <div className="py-10 flex justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border border-gray-200 bg-white w-[450px] rounded-xl shadow-xl"
        >
          <div className="px-3 py-6 text-center">
            <NavLink to={"/f"}>
              <p className="text-3xl font-semibold text-green-500">💪 Fitness</p>
              <p className="text-gray-500 py-2">
                Kundalik mashqlar va jismoniy faollik tavsiyalari
              </p>
            </NavLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border border-gray-200 bg-white w-[450px] rounded-xl shadow-xl"
        >
          <div className="px-3 py-6 text-center">
            <NavLink to={"/e"}>
              <p className="text-3xl font-semibold text-green-500">🥗 Ovqatlanish</p>
              <p className="text-gray-500 py-2">
                To'g'ri ovqatlanish va parxezlar
              </p>
            </NavLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border border-gray-200 bg-white w-[450px] rounded-xl shadow-xl"
        >
          <div className="px-3 py-6 text-center">
            <NavLink to={"/h"}>
              <p className="text-3xl font-semibold text-green-500">⚡ Sog'lom tana</p>
              <p className="text-gray-500 py-2">
                Stressni kamaytirish va meditatsiya bo‘yicha maslahatlar
              </p>
            </NavLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border border-gray-200 bg-white w-[450px] rounded-xl shadow-xl"
        >
          <div className="px-3 py-6 text-center">
            <NavLink to={"/b"}>
              <p className="text-3xl font-semibold text-green-500">📊 BMI kalkulyator</p>
              <p className="text-gray-500 py-2">
                Stressni kamaytirish va meditatsiya bo‘yicha maslahatlar
              </p>
            </NavLink>
          </div>
        </motion.div>
      </div>

     <div>
      <div>
        <p className="text-4xl text-green-500 text-center font-semibold">Bu yerda nimalarni bilib olasiz ?</p>
      </div>
       <section className="mt-20 space-y-10">
        <div data-aos="fade-up" className="rounded-xl p-6 w-full bg-gradient-to-r from-blue-300/70 via-blue-400/50 to-blue-500/70 backdrop-blur-md shadow-lg">
          <NavLink to={'/e'}>
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">To'g'ri ovqatlanishni</h2>
            <FaArrowRight size={20} className="mt-1"/>
            </div>
          </NavLink>
        </div>
        <div data-aos="fade-right" className="rounded-xl p-6 w-full bg-gradient-to-r from-green-300/70 via-green-400/50 to-green-500/70 backdrop-blur-md shadow-lg">
          <NavLink to={'/h'}>
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Tanamizdagi kaloriyalarni o'lchashni</h2>
            <FaArrowRight size={20} className="mt-1"/>
            </div>
          </NavLink>
        </div>
        <div data-aos="zoom-in" className="rounded-xl p-6 w-full bg-gradient-to-r from-yellow-300/70 via-yellow-400/50 to-yellow-500/70 backdrop-blur-md shadow-lg">
          <NavLink to={'/f'}>
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Fitness mashg'ulotlarni</h2>
            <FaArrowRight size={20} className="mt-1"/>
            </div>
          </NavLink>
        </div>
        <div data-aos="zoom-in" className="rounded-xl p-6 w-full bg-gradient-to-r from-red-300/70 via-red-400/50 to-red-500/70 backdrop-blur-md shadow-lg">
          <NavLink to={'/b'}>
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Vazn yeg'ish va Ozishni </h2>
            <FaArrowRight size={20} className="mt-1"/>
            </div>
          </NavLink>
        </div>
        <div data-aos="zoom-in" className="p-6 bg-yellow-100 rounded-lg shadow">
          <NavLink to={'/b'}>
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Vazn yeg'ish va Ozishni </h2>
            <FaArrowRight size={20} className="mt-1"/>
            </div>
          </NavLink>
        </div>
      </section>
     </div>
    </div>
  );
};

export default Hero;
