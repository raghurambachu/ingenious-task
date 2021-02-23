import React from "react";
import { object } from "prop-types";

const propTypes = {
  data: object,
};

function Resources(props) {
  const { data } = props;
  return (
    <div className="resources-tab">
      {data?.images?.length > 1 ? (
        <>
          <p>{data?.intro}</p>
          <ul className={`my-4 gap-4 grid grid-cols-${data?.images?.length}`}>
            {data?.images?.map((image, index) => (
              <img
                key={index}
                className="col-span-1"
                src={image}
                alt={`im-${index}`}
              />
            ))}
          </ul>
        </>
      ) : (
        <>
          {data?.images?.length !== 0 && (
            <img src={data?.images[0]} alt="resources-1" />
          )}
          <p>{data?.intro}</p>
        </>
      )}
    </div>
  );
}

Resources.propTypes = propTypes;

export default Resources;
