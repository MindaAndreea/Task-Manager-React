import { useState } from "react";
import "./ContainerBox.css";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";
import TaskCard from "../TaskCard/TaskCard";
import NoTasks from "../NoTasks/NoTasks";
import Modal from "../Modal/Modal";
import ControlPanel from "../ControlPanel/ControlPanel";

const ContainerBox = () => {
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

  const [taskList, setTaskList] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const onAddTask = (task) => {
    setTaskList([
      ...taskList,
      {
        taskName: task.name,
        taskDate: task.date,
        taskDescription: task.desc,
        taskStatus: "Todo",
      },
    ]);
  };

  console.log(taskList);

  return (
    <div className="container-box">
      <ControlPanel onClickFunction={openModal} />
      {taskList.length > 0 ? (
        <div className="tasks">
          {taskList.map((task, index) => (
            <TaskCard
              name={task.taskName}
              status={task.taskStatus}
              desc={task.taskDescription}
              date={task.taskDate}
              key={index}
            />
          ))}
        </div>
      ) : (
        <NoTasks onClickFunction={openModal} />
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CreateTaskForm addTask={onAddTask} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default ContainerBox;
