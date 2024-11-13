import React from "react";
import "./NoTasks.css";
import Button from "../Button/Button";

const NoTasks = () => {
  return (
    <div className="noTasksContainer">
      <img src="/images/no-tasks.png" alt="no tasks image" />
      <h2>No Tasks Yet</h2>
      <p>You have no tasks created in your workspace yet.</p>
      <p> Get productive. Create a Task Now.</p>
      <Button textBtn="Create a Task" />
    </div>
  );
};

export default NoTasks;
