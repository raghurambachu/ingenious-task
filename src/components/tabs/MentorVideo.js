import React from "react";
import { object } from "prop-types";
import dhlImage from "../../images/dhl.png";

const propTypes = {
  data: object,
};

function MentorVideo(props) {
  const { data } = props;
  return (
    <div className="mentor-video">
      <div className="relative">
        <img
          className="w-full object-cover"
          src={data?.image}
          alt={data?.imageAlt}
        />
        <img
          className="absolute w-16 h-12 ml-10 mb-4 bottom-0"
          src={dhlImage}
          alt="Dhl logo"
        />
      </div>
      <p className="mt-4">{data?.intro} </p>
    </div>
  );
}

MentorVideo.propTypes = propTypes;

export default MentorVideo;
