import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/todo_logo.png";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { AiOutlineLogout } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const TodoNav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  console.log(isDarkMode);
  const MenuLinks = [
    { to: "/addtask", title: "Add Task" },
    { to: "/mytasks", title: "My Tasks" },
    { to: "/completedtasks", title: "Completed Tasks" },
  ];

  const activeStyle = { color: "#D9465A" };

  // Toggle dark class on html
  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [isDarkMode]);

  //Handlers
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  const handleLogout = () => {
    logOut();
  };

  let Links = null;
  // If user is logged in then show private routes
  if (user?.uid) {
    const navs = MenuLinks.map((link) => (
      <li key={link.to}>
        <NavLink
          to={link.to}
          style={({ isActive }) => (isActive ? activeStyle : null)}
          className={`font-medium tracking-wide text-gray-700 dark:text-white transition-colors duration-200 hover:text-primaryColor`}
        >
          {link.title}
        </NavLink>
      </li>
    ));
    Links = navs;
  }

  return (
    <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
      <div className="relative flex items-center justify-between mb-10 bg-white dark:bg-slate-700 rounded-lg px-4 py-2">
        <Link to="/" className="inline-flex items-center">
          <img src={logo} alt="logo" className="max-w-[50px]" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 dark:text-white uppercase">
            Todo
          </span>
        </Link>
        <ul className=" items-center hidden space-x-8 lg:flex">
          {/* Iterate Nav Links */}
          {Links}
        </ul>
        <ul className=" items-center hidden space-x-8 lg:flex">
          {/* Toggle Darkmode */}
          <li className="flex justify-center">
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={30}
            />
          </li>

          {/* Join / Profile Picture */}
          <li>
            {user?.uid ? (
              <AiOutlineLogout
                className="cursor-pointer text-3xl "
                onClick={handleLogout}
              />
            ) : (
              <Link to="register" className="text-lg font-bold md:mr-5">
                Join
              </Link>
            )}
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white dark:bg-slate-900 border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <img src={logo} alt="logo" className="max-w-[50px]" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 dark:text-white uppercase">
                        Todo
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg
                        className="w-5 text-gray-600 dark:text-white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {/* Iterate Nav Links */}
                    {Links}
                    <li className="flex flex-col justify-center">
                      <DarkModeSwitch
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={30}
                      />
                    </li>
                    <li>
                      {user?.uid ? (
                        <AiOutlineLogout
                          className="cursor-pointer text-3xl "
                          onClick={handleLogout}
                        />
                      ) : (
                        <Link
                          to="register"
                          className="text-lg font-bold md:mr-5"
                        >
                          Join
                        </Link>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoNav;
