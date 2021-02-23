import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BsFolder } from "react-icons/bs";

import { string } from "prop-types";
const propTypes = {
  myFileListItem: string,
};

function MyFilesItem(props) {
  return (
    <li className="nav-file-item flex items-center space-x-2 px-4 my-1 cursor-pointer">
      <AiOutlineCaretRight size={22} className="text-gray-400" />
      <BsFolder />
      <span className="mx-2 text-sm">{props.myFileListItem}</span>
    </li>
  );
}

MyFilesItem.propTypes = propTypes;

export default MyFilesItem;
