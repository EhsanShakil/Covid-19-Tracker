import React from "react";
import "../cases.css";
import CountUp from "react-countup";

const RecoveredCases = ({ data: { recovered, lastUpdate } }) => {
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
      <h3 style={{ backgroundColor: "green" }}>
        {new Date(lastUpdate).toDateString()}
      </h3>
      <h3>Number of Recoveries</h3>
    </div>
  );
};

export default RecoveredCases;
