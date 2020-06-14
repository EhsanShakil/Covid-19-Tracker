import React from "react";
import "../cases.css";
import CountUp from "react-countup";

const ConfirmedCases = ({ data: { confirmed, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className="confirmedcases">
      <h1>Infected</h1>
      <h2>
        <CountUp
          start={0}
          end={confirmed.value}
          duration={2.75}
          separator=","
        />
      </h2>
      <h3 style={{ backgroundColor: "blue" }}>
        {new Date(lastUpdate).toDateString()}
      </h3>
      <h3>Number of Active Cases</h3>
    </div>
  );
};

export default ConfirmedCases;
