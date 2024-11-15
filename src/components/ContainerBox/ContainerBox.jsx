import { useState } from "react";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";
import TaskCard from "../TaskCard/TaskCard";
import "./ContainerBox.css";
import NoTasks from "../NoTasks/NoTasks";

const ContainerBox = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTask = (task) => {
    setTaskList([
      ...taskList,
      {
        taskName: task.name,
        taskDate: task.date,
        taskDesc: task.desc,
        taskStatus: "Todo",
      },
    ]);
  };

  console.log(taskList);

  return (
    <div className="container-box">
      <h1>Tasks</h1>
      <h4>Your tasks in your space.</h4>
      {taskList.length > 0 ? (
        <div className="tasks">
          {taskList.map((task, index) => (
            <TaskCard
              name={task.taskName}
              status={task.taskStatus}
              desc={task.taskDesc}
              date={task.taskDate}
              key={index}
            />
          ))}
        </div>
      ) : (
        <NoTasks />
      )}
      <CreateTaskForm addTask={onAddTask} />
    </div>
  );
};

export default ContainerBox;
