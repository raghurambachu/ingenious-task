import React, { useRef } from "react";
import { number, func } from "prop-types";
import submitImage from "../../images/submit-img.png";
import unlockImage from "../../images/lock.png";

const propTypes = {
  selectedTask: number,
  appDispatch: func,
};

function Submit(props) {
  const { selectedTask, appDispatch } = props;
  const fileInput = useRef();
  return (
    <div className="submit-tab text-gray-500">
      <h3 className="text-center text-lg text-black font-semibold ">
        Submit Your Task
      </h3>
      <img className="mx-auto" src={submitImage} alt="submit" />
      <div className="drag-drop-box relative my-3">
        <input
          type="file"
          name="fileInput"
          ref={fileInput}
          className="file-input absolute  mx-auto w-full"
        />
        <div className="drag-drop  border-2 border-gray-400 border-dashed w-full text-center flex flex-col justify-center items-center">
          <div className="drag-drop-text p-4">
            <h3 className="text-xl font-bold">
              Drop your file here or <span className="text-green">browse</span>{" "}
              to upload
            </h3>
          </div>
        </div>
      </div>

      <h4 className="text-center text-lg text-black font-semibold ">
        Unlock Sample Task
      </h4>
      <div className="flex justify-center">
        <img className=" my-4" src={unlockImage} alt="unlock" />
      </div>

      {/* Adding extra button to ensure user can naviagate to next task */}
      <div className="flex justify-center space-x-4 items-center ">
        <p className="text-center">
          Download a sample of the task you submitted
        </p>
        <button
          onClick={() => {
            appDispatch({ type: "SET_COMPLETED", payload: selectedTask });
            appDispatch({ type: "SET_TASK", payload: selectedTask + 1 });
          }}
          className=" bg-green text-white rounded-sm py-1 px-4 shadow-md hover:shadow-lg cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

Submit.propTypes = propTypes;

export default Submit;
