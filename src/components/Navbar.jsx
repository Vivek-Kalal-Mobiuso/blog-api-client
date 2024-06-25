import React, { useState } from "react";
import {logo} from '../assests'

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (e) => {
    document.getElementById("App").classList.add("dark");
  };
  return <div className="flex w-full">
    <div className="flex-1 px-3 py-1 border-2 border-black">
      <img src={logo} className="w-[60px] rounded-full bg-black" alt="logo" />
    </div>
    <div className="flex flex-1 p-2">
      <ul className="flex w-full justify-around items-center font-semibold">
        <li>Home</li>
        <li>Blogs</li>
        <li>Home</li>
      </ul>
    </div>
  </div>;
};

export default Navbar;
