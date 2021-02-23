import React from "react";
import MyFilesItem from "./MyFilesItem";

const myFileList = ["Uploads", "Downloads"];

function MyFiles(_) {
  return (
    <div className="my-files-section">
      <h4 className="text-black mx-10 my-5">My Files</h4>
      <ul>
        {myFileList.map((myFileListItem) => (
          <MyFilesItem key={myFileListItem} myFileListItem={myFileListItem} />
        ))}
      </ul>
    </div>
  );
}

export default MyFiles;
