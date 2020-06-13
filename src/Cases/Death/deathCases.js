import React from "react";
import "../cases.css";
import CountUp from "react-countup";

const DeathCases = ({ data: { deaths } }) => {
  if (!deaths) {
    return "Loading...";
  }
  return (
    <div className="deaths">
      <h1>Deaths</h1>
      <h2>
        <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
      </h2>
    </div>
  );
};

export default DeathCases;
