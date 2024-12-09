import React from "react";
import "./FilterItem.css";

const FilterItem = (props) => {
  return (
    <div className="filter-item">
      {props.status}
      <span>3</span>
    </div>
  );
};

export default FilterItem;
