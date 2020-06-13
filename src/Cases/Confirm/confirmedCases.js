import React from "react";
import "../cases.css";
import CountUp from "react-countup";

const ConfirmedCases = ({ data: { confirmed } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className="confirmedcases">
      <h1>Confirmed</h1>
      <h2>
        <CountUp
          start={0}
          end={confirmed.value}
          duration={2.75}
          separator=","
        />
      </h2>
    </div>
  );
};

export default ConfirmedCases;
