import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // ❗ kerakli state'lar
  const [lang, setLang] = useState("O'zb");
  const [open, setOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-green-600/70 via-green-500/50 to-green-700/70 backdrop-blur-md shadow-lg'>
      <div className='px-[150px]'>
        <div className='flex justify-between'>
          <div className='py-1'>
            <NavLink to={'/'}>
              <button className='font-semibold text-4xl text-white'>FITLIFE</button>
            </NavLink>
          </div>

          <div className='py-3 flex justify-between gap-8'>
            <div className='flex gap-2'>
              <FaPhoneAlt className='text-white mt-[6px]'/>
              <p className='text-white text-xl'>Aloqa</p>
            </div>

            <div className='flex gap-2 relative'>
              <FaLocationDot className='text-white mt-[6px]' size={19}/>
              
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-white border border-white rounded-xl bg-green-500 hover:bg-green-700 transition"
              >
                {lang}
                <svg
                  className="ml-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {open && (
                <div className="absolute right-0 mt-12 w-24 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  {["Tashkent", "Jizzax", "Termiz", "Buxoro"].map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setOpen(false); }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
