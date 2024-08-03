import React, { useState } from "react";
import "./CreateTaskForm.css";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CreateTaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleTaskName = (event) => {
    setTaskName(event.target.value);
  };

  const handleTaskDate = (event) => {
    setTaskDate(event.target.value);
  };
  const handleTaskDesc = (event) => {
    setTaskDesc(event.target.value);
  };
  console.log(taskName, taskDate, taskDesc);

  const handleSubmitForm = (event) => {
    console.log("Submit");
    event.preventDefault();
  };

  return (
    <div className="createTaskForm">
      <div className="title">
        <h2>Create Task</h2>
        <div className="icon">
          <FontAwesomeIcon icon={faXmark} className="closeIcon" />
        </div>
      </div>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="taskName">Task Name</label>
        <input type="text" id="taskName" onChange={handleTaskName} />

        <label htmlFor="taskDate">Due Date</label>
        <input type="date" id="taskDate" onChange={handleTaskDate} />

        <label htmlFor="taskDesc">Task Description</label>
        <textarea
          id="taskDesc"
          onChange={handleTaskDesc}
          placeholder="Type your content here...."
        ></textarea>
        <Button textBtn="Create Task" />
      </form>
    </div>
  );
};

export default CreateTaskForm;
