import React from "react";

import { IoHomeSharp } from "react-icons/io5";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function InfoNavbar(props) {
  return (
    <header className="info-navbar flex justify-end text-gray-500 space-x-4">
      <IoHomeSharp className="cursor-pointer" size={24} />
      <div className="relative">
        <FaBell className="cursor-pointer" size={24} />
        <span className="animate-ping top-0 right-0 absolute inline-flex h-2 w-2 rounded-full bg-pink-400 opacity-75"></span>
      </div>
      <MdEmail className="cursor-pointer" size={24} />
      <FaUserCircle className="cursor-pointer" size={24} />
    </header>
  );
}

export default InfoNavbar;
