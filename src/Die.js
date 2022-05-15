import React from "react";
import dieDots from "./utils/dieDots";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59e391" : "#fff",
  };

  const dotElements = dieDots(props.value).map((dotLocation, index) => (
    <div key={index} className={`dot ${dotLocation}`}></div>
  ));

  return (
    <div className="die" style={styles} onClick={props.holdDice}>
      <div className="dots-container">{dotElements}</div>
    </div>
  );
}
