import React from "react";
import "./Badge.css";

const Badge = (props) => {
  const badgeColor = () => {
    switch (props.status) {
      case "Pending":
        return "yellow";
      case "In Progress":
        return "blue";
      case "In Review":
        return "purple";
      case "Completed":
        return " green";
      case "Unassigned":
        return "red";
      case "Todo":
        return "grey";
      default:
        return "grey";
    }
  };

  return (
    <div>
      <p className={`status ${badgeColor()}`}>{props.status}</p>
    </div>
  );
};

export default Badge;
