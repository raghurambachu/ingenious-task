import React from "react";
import { object } from "prop-types";

const propTypes = {
  data: object,
};

function Information(props) {
  const { data } = props;
  return (
    <div className="information-tab">
      {data?.paras?.map((para) => (
        <p className="my-2 mb-6" key={para.slice(0, 20)}>
          {para}
        </p>
      ))}
    </div>
  );
}

Information.propTypes = propTypes;

export default Information;
