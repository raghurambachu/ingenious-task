import React from "react";
import { object } from "prop-types";

const propTypes = {
  data: object,
};

function Task(props) {
  const { data } = props;
  return (
    <div className="task-tab">
      {data?.paras?.map((para) => (
        <p className="my-2 mb-6" key={para.slice(0, 20)}>
          {para}
        </p>
      ))}
      {data?.list?.length > 0 && (
        <ul className="list-outside px-8  ">
          {data?.list?.map((listItem) => (
            <li key={listItem.slice(0, 35)} className="my-3">
              {listItem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Task.propTypes = propTypes;

export default Task;
