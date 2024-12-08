import React, { useState } from "react";
import "./CreateTaskForm.css";
import Button from "../Button/Button";

const CreateTaskForm = (props) => {
  const [taskData, setTaskData] = useState({ name: "", date: "", desc: "" });

  const [formErrors, setFormErrors] = useState({});

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

  const validateForm = () => {
    let errors = {};

    if (!taskData.name) {
      errors.nameError = "Task name is required!";
    } else if (taskData.name.length < 3) {
      errors.nameError = "Task name must have minimum 3 characters!";
    }

    if (!taskData.date) {
      errors.dateError = "Task date is required!";
    }

    if (!taskData.desc) {
      errors.descError = "Task description is required!";
    }

    setFormErrors({ ...errors });

    let isValid = Object.keys(errors).length < 1;
    return isValid;
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    let isValid = validateForm();

    if (isValid) {
      props.addTask(taskData);
      resetState();
      if (props.closeModal) {
        props.closeModal();
      }
    } else {
      console.log("Avem erori!");
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
          className={formErrors.nameError && "error-input"}
        />
        {formErrors.nameError && (
          <span className="error-msg">{formErrors.nameError}</span>
        )}

        <label htmlFor="taskDate">Due Date</label>
        <input
          type="date"
          id="taskDate"
          onChange={handleTaskDate}
          value={taskData.date}
          className={formErrors.dateError && "error-input"}
        />
        {formErrors.dateError && (
          <span className="error-msg">{formErrors.dateError}</span>
        )}

        <label htmlFor="taskDesc">Task Description</label>
        <textarea
          id="taskDesc"
          onChange={handleTaskDesc}
          placeholder="Type your content here...."
          value={taskData.desc}
          className={formErrors.descError && "error-input"}
        ></textarea>
        {formErrors.descError && (
          <span className="error-msg">{formErrors.descError}</span>
        )}

        <Button textBtn="Create Task" />
      </form>
    </div>
  );
};

export default CreateTaskForm;
