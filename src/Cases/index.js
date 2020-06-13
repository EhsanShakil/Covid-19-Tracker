import React from "react";
import ConfirmedCases from "./Confirm/confirmedCases";
import DeathCases from "./Death/deathCases";
import RecoveredCases from "./Recovered/recoveredCases";
import "./cases.css";

const Data = (props) => {
  return (
    <div className="container">
      <ConfirmedCases data={props.data} />
      <RecoveredCases data={props.data} />
      <DeathCases data={props.data} />
    </div>
  );
};
export default Data;
