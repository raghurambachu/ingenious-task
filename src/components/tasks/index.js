import React from "react";
import { object, func } from "prop-types";
import TaskListItem from "./TaskListItem";

const taskList = [
  {
    taskId: 1,
    taskTitle: "Market Research",
    activity: "Research",
    schedule: "Self Paced",
  },
  {
    taskId: 2,
    taskTitle: "Solution Assessment",
    activity: "Reporting",
    schedule: "Self Paced",
  },
  {
    taskId: 3,
    taskTitle: "Opportunity Evaluation",
    activity: "Creativity",
    schedule: "Self Paced",
  },
  {
    taskId: 4,
    taskTitle: "Future Readiness",
    activity: "Critical Thinking",
    schedule: "Self Paced",
  },
];

const propTypes = {
  appState: object,
  appDispatch: func,
};

function Tasks(props) {
  const { appState, appDispatch } = props;
  return (
    <div className="bg-white p-4 xl:px-8 rounded-lg col-span-1 text-gray-900">
      <h3>Program Overview:</h3>
      <div className="tasks-section mx-auto mt-8">
        <ul>
          {taskList.map((task) => (
            <TaskListItem
              key={task.taskId}
              {...{ ...task, appState, appDispatch }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

Tasks.propTypes = propTypes;

export default Tasks;
