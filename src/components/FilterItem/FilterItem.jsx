import React from "react";
import "./FilterItem.css";

const FilterItem = (props) => {
  return (
    <div
      className={`filter-item ${props.isActive ? "active" : ""} ${
        props.colorClass
      }`}
      onClick={props.onStatusClick}
    >
      {props.status}
      <span>{props.count}</span>
    </div>
  );
};

export default FilterItem;
