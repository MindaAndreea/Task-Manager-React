import React, { useState } from "react";
import "./CreateTaskForm.css";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CreateTaskForm = (props) => {
  const [taskData, setTaskData] = useState({ name: "", date: "", desc: "" });

  const handleTaskName = (event) => {
    setTaskData((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const handleTaskDate = (event) => {
    setTaskData((prevState) => ({
      ...prevState,
      date: event.target.value,
    }));
  };

  const handleTaskDesc = (event) => {
    setTaskData((prevState) => ({
      ...prevState,
      desc: event.target.value,
    }));
  };

  const resetState = () => {
    setTaskData({ name: "", date: "", desc: "" });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    props.addTask(taskData);
    resetState();
    if (props.closeModal) {
      props.closeModal();
    }
  };

  return (
    <div className="createTaskForm">
      <div className="title">
        <h2>Create Task</h2>
      </div>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="taskName">Task Name</label>
        <input
          type="text"
          id="taskName"
          onChange={handleTaskName}
          value={taskData.name}
        />

        <label htmlFor="taskDate">Due Date</label>
        <input
          type="date"
          id="taskDate"
          onChange={handleTaskDate}
          value={taskData.date}
        />

        <label htmlFor="taskDesc">Task Description</label>
        <textarea
          id="taskDesc"
          onChange={handleTaskDesc}
          placeholder="Type your content here...."
          value={taskData.desc}
        ></textarea>

        <Button textBtn="Create Task" />
      </form>
    </div>
  );
};

export default CreateTaskForm;
