import React from "react";
import "../cases.css";
import CountUp from "react-countup";

const RecoveredCases = ({ data: { recovered } }) => {
  if (!recovered) {
    return "Loading...";
  }
  return (
    <div className="recoverededcases">
      <h1>Recovered</h1>
      <h2>
        <CountUp
          start={0}
          end={recovered.value}
          duration={2.75}
          separator=","
        />
      </h2>
    </div>
  );
};

export default RecoveredCases;
