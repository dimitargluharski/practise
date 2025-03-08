import { useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [theme, setTheme] = useState<string>('dark');

  const toggleTheme = () => {
    setTheme((oldValue) => oldValue === 'dark' ? 'white' : 'dark');
  };

  return (
    <div className="w-full flex">
      <div className="flex justify-between w-full p-2">
        <NavLink to="/" className={({ isActive }) => isActive ? 'border-b-3 border-b-blue-700' : ''}>
          Topics
        </NavLink>

        <button className="bg-blue-700 p-2 text-white rounded-md">
          + Add topic
        </button>

        <div className="p-2">
          {theme === 'dark'
            ? <FaMoon className="w-5 h-5" onClick={toggleTheme} />
            : <MdOutlineWbSunny className="w-5 h-5" onClick={toggleTheme} />
          }
        </div>
      </div>
    </div>
  )
}