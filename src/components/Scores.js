import React from "react";
import Rolls from "./Rolls";
export default function Scores(props) {
  return (
    <div className="scores-container">
      <Rolls rollsCount={props.rollsCount} />
    </div>
  );
}
