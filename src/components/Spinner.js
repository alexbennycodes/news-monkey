import React from "react";
import Loading from "../loading.gif";

function Spinner() {
  return (
    <div className="text-center">
      <img className="mt-5" src={Loading} alt="" />
    </div>
  );
}

export default Spinner;
