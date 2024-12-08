import { useState } from "react";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";
import TaskCard from "../TaskCard/TaskCard";
import "./ContainerBox.css";
import NoTasks from "../NoTasks/NoTasks";
import Modal from "../Modal/Modal";
import ControlPanel from "../ControlPanel/ControlPanel";

const ContainerBox = () => {
  const [taskList, setTaskList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

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
      <ControlPanel onClickFunction={openModal} />
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
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CreateTaskForm addTask={onAddTask} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default ContainerBox;
