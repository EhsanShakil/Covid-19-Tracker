import React from "react";
import "../cases.css";
import CountUp from "react-countup";

const DeathCases = ({ data: { deaths, lastUpdate } }) => {
  if (!deaths) {
    return "Loading...";
  }
  return (
    <div className="deaths">
      <h1>Deaths</h1>
      <h2>
        <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
      </h2>
      <h3 style={{ backgroundColor: "red" }}>
        {new Date(lastUpdate).toDateString()}
      </h3>
      <h3>Number of Deaths</h3>
    </div>
  );
};

export default DeathCases;
