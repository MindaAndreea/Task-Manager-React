import React, { useState } from "react";
import "./CreateTaskForm.css";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CreateTaskForm = (props) => {
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

  const newTask = {
    name: taskName,
    date: taskDate,
    desc: taskDesc,
  };

  const resetState = () => {
    setTaskName("");
    setTaskDate("");
    setTaskDesc("");
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    props.addTask(newTask);
    resetState();
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
        <input
          type="text"
          id="taskName"
          onChange={handleTaskName}
          value={taskName}
        />

        <label htmlFor="taskDate">Due Date</label>
        <input
          type="date"
          id="taskDate"
          onChange={handleTaskDate}
          value={taskDate}
        />

        <label htmlFor="taskDesc">Task Description</label>
        <textarea
          id="taskDesc"
          onChange={handleTaskDesc}
          placeholder="Type your content here...."
          value={taskDesc}
        ></textarea>

        <Button textBtn="Create Task" />
      </form>
    </div>
  );
};

export default CreateTaskForm;
