import React from "react";
import "./ControlPanel.css";
import Button from "../Button/Button";

const ControlPanel = (props) => {
  return (
    <div className="controlPanel">
      <div className="left">
        <h1>Tasks</h1>
        <h4>Your tasks in your space.</h4>
      </div>
      <div className="right">
        <Button textBtn="Create Task" onClickFunction={props.onClickFunction} />
      </div>
    </div>
  );
};

export default ControlPanel;
