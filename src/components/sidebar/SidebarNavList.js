import React from "react";

import { SiGooglescholar } from "react-icons/si";
import { IoMdLaptop, IoMdInformationCircleOutline } from "react-icons/io";
import { IoGitNetworkSharp, IoCalendarOutline } from "react-icons/io5";
import { GiAchievement } from "react-icons/gi";
import SidebarNavListItem from "./SidebarNavListItem";

const sideBarData = [
  {
    Icon: SiGooglescholar,
    title: "Programs",
  },
  {
    Icon: IoMdLaptop,
    title: "Coaching",
  },
  {
    Icon: IoGitNetworkSharp,
    title: "Collaborations",
  },
  {
    Icon: GiAchievement,
    title: "Progress",
  },
  {
    Icon: IoMdInformationCircleOutline,
    title: "Knowledge",
  },
  {
    Icon: IoCalendarOutline,
    title: "Calendar",
  },
];

function SidebarNavList(props) {
  return (
    <>
      <nav className="pt-10">
        <ul>
          {sideBarData.map((navItem, index) => (
            <SidebarNavListItem
              key={navItem.title}
              {...{ ...navItem, index }}
            />
          ))}
        </ul>
      </nav>
      <div className="divider border-b-2 border-gray-200 mr-2 pt-2"></div>
    </>
  );
}

export default SidebarNavList;
