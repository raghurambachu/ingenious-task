import React from "react";
import { number, any, string } from "prop-types";

const propTypes = {
  index: number,
  Icon: any,
  title: string,
};

function SidebarNavListItem(props) {
  const { Icon, title, index } = props;
  return (
    <li
      className={`flex  p-4 space-x-4 cursor-pointer ${
        index === 0 && "bg-green-100"
      }`}
    >
      <Icon size={24} />
      <span>{title}</span>
    </li>
  );
}

SidebarNavListItem.propTypes = propTypes;

export default SidebarNavListItem;
