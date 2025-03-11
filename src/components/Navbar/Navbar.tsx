import { useContext } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

export const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("ThemeContext is undefined");
  }
  const { theme, handleToggleTheme } = themeContext;

  return (
    <div className="w-full flex dark:bg-red-900 bg-white">
      <div className="flex justify-between w-full p-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-3 border-b-blue-700" : ""
          }
        >
          Topics
        </NavLink>

        <Link
          to="/create-new-topic"
          className="bg-blue-700 p-2 text-white rounded-md"
        >
          + Add topic
        </Link>

        <div className="p-2">
          {theme === "dark" ? (
            <FaMoon className="w-5 h-5" onClick={handleToggleTheme} />
          ) : (
            <MdOutlineWbSunny className="w-5 h-5" onClick={handleToggleTheme} />
          )}
        </div>
      </div>
    </div>
  );
};
