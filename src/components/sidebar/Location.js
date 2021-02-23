import React from "react";
import location from "../../images/location.png";

function Location(_) {
  return (
    <div className="flex mt-16 mx-auto space-x-2">
      <div className="w-15">
        <img src={location} alt="Location" />
      </div>
      <div>
        <h3 className="text-lg text-black">Your Timezone </h3>
        <p>Netherlands</p>
      </div>
    </div>
  );
}

export default Location;
