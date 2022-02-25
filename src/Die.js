import React from "react";
import DieDots from "./DieDots";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59e391" : "#fff",
  };

  return (
    <div className="die" style={styles} onClick={props.holdDice}>
      <DieDots value={props.value} />
    </div>
  );
}
