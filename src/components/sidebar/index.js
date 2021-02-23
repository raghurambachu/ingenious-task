import React from "react";
import Location from "./Location";
import MyFiles from "./MyFiles";
import SidebarNavList from "./SidebarNavList";
import logo from "../../images/logo.png";

function Sidebar(_) {
  return (
    <section className="sidebar col-span-2 text-gray-600 flex flex-col justify-between">
      <img className="w-48" src={logo} alt="Belong logo" />
      <SidebarNavList />
      <MyFiles />
      <Location />
    </section>
  );
}

export default Sidebar;
