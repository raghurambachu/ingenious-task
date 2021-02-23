import React, { useState, useEffect } from "react";
import InfoNavbar from "./InfoNavbar";
import { object, func } from "prop-types";
import appData from "../../appData";
import MentorVideo from "./MentorVideo";
import Information from "./Information";
import Task from "./Task";
import Resources from "./Resources";
import Submit from "./Submit";

const tabs = ["Mentor Video", "Information", "Task", "Resources", "Solution"];
const propTypes = {
  appState: object,
  appDispatch: func,
};

function getComponentBasedOnSelectedTab(
  selectedTask,
  selectedTab,
  appDispatch
) {
  const data = appData[selectedTask] && appData[selectedTask][selectedTab];
  switch (selectedTab) {
    case "Mentor Video":
      return <MentorVideo data={data} />;
    case "Information":
      return <Information data={data} />;
    case "Task":
      return <Task data={data} />;
    case "Resources":
      return <Resources data={data} />;
    case "Solution":
      return <Submit {...{ selectedTask, appDispatch }} />;
    default:
      return "There is some issue, no component has been rendered";
  }
}

function TabSection(props) {
  const { appState, appDispatch } = props;
  const [selectedTab, setSelectedTab] = useState("Mentor Video");

  useEffect(() => {
    setSelectedTab("Mentor Video");
  }, [appState?.selectedTask]);

  return (
    <div className="col-span-2">
      <InfoNavbar />
      <section className="tab-navbar mt-16 flex px-16">
        <ul className="flex lg:text-xs xl:text-base">
          {tabs.map((tab) => (
            <li
              className={`px-6 py-3 border-b-8 border-gray-300 cursor-pointer ${
                selectedTab === tab &&
                "border-green transition duration-500  ease-in-out"
              }`}
              key={tab}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </section>
      <div className="px-16 my-6">
        {getComponentBasedOnSelectedTab(
          appState.selectedTask,
          selectedTab,
          appDispatch
        )}
      </div>
    </div>
  );
}

TabSection.propTypes = propTypes;

export default TabSection;
