import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { string, number, func, object } from "prop-types";

const propTypes = {
  taskTitle: string,
  taskId: number,
  activity: string,
  schedule: string,
  appState: object,
  appDispatch: func,
};

function TaskListItem(props) {
  const {
    taskTitle,
    taskId,
    activity,
    schedule,
    appState,
    appDispatch,
  } = props;
  return (
    <li
      key={taskTitle}
      className="shadow-xl flex  rounded-2xl border-r border-t border-gray-100 my-6 cursor-pointer"
      onClick={() =>
        taskId === 1
          ? appDispatch({ type: "SET_TASK", payload: taskId })
          : appState?.isCompleted[taskId - 1] &&
            appDispatch({ type: "SET_TASK", payload: taskId })
      }
    >
      <span
        className={`flex justify-center items-center px-5 shadow-2xl rounded-2xl  font-bold shadow-right ${
          appState.selectedTask === taskId
            ? "bg-green text-green-100"
            : "bg-green-100 text-gray-800"
        } `}
      >
        {taskId}
      </span>
      <div className="p-3 px-4 w-full">
        <div className="flex justify-between mb-2">
          <h5 className="lg:text-sm xl:text-base">{taskTitle}</h5>
          <BsChevronRight className="text-green" size={22} />
        </div>
        <div className="flex lg:space-x-2 xl:justify-between items-center text-xs  mt-1">
          <div className="flex space-x-2 items-center">
            <FaBookReader size={16} />
            <span>{activity}</span>
          </div>
          <div className="flex space-x-2 items-center">
            <IoTimerOutline size={16} />
            <span>{schedule}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

TaskListItem.propTypes = propTypes;

export default TaskListItem;
