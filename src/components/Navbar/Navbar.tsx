import { useContext } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

import { ThemeContext } from "../../context/ThemeContext";

export const Navbar = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return;
  const { theme, handleToggleTheme } = themeContext;
  const navigate = useNavigate();

  const handleNavigateToCreateTopicPage = () => {
    return navigate("/create-topic");
  }

  return (
    <div className="flex dark:bg-slate-700 dark:text-white w-full">
      <div className="flex justify-between w-full items-center p-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-3 border-b-blue-700" : ""
          }
        >
          <div className="hover:cursor-pointer">
            <FaHome className="w-5 h-5" />
          </div>
        </NavLink>

        <div className="flex items-center gap-2">
          <div onClick={handleNavigateToCreateTopicPage} className="hover:cursor-pointer">
            <FaPlus className="w-5 h-5" />
          </div>

          <div className="hover:cursor-pointer">
            <IoPerson className="w-5 h-5" />
          </div>

          {theme === "dark" ? (<div className="hover:cursor-pointer">
            <FaMoon className="w-5 h-5" onClick={handleToggleTheme} />
          </div>
          ) : (
            <div className="hover:cursor-pointer">
              <MdOutlineWbSunny className="w-5 h-5" onClick={handleToggleTheme} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
