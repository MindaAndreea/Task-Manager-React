import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = (props) => {
  const data = [
    {
      taskName: "task1",
      taskDate: "12-12-2024",
      taskDescription: "description 1",
      taskStatus: "Pending",
    },
    {
      taskName: "task2",
      taskDate: "12-12-2024",
      taskDescription: "description 2",
      taskStatus: "In Progress",
    },
    {
      taskName: "task3",
      taskDate: "12-12-2024",
      taskDescription: "description 3",
      taskStatus: "In Review",
    },
    {
      taskName: "task4",
      taskDate: "12-12-2024",
      taskDescription: "description 4",
      taskStatus: "Completed",
    },
    {
      taskName: "task5",
      taskDate: "12-12-2024",
      taskDescription: "description 5",
      taskStatus: "Unassigned",
    },
    {
      taskName: "task6",
      taskDate: "12-12-2024",
      taskDescription: "description 6",
      taskStatus: "Todo",
    },
  ];

  const [taskList, setTaskList] = useState(() => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : data;
  });

  const [activeStatus, setActiveStatus] = useState("All Tasks");

  return (
    <TaskContext.Provider
      value={{ taskList, setTaskList, activeStatus, setActiveStatus }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export const UsingTaskContext = () => {
  return useContext(TaskContext);
};
