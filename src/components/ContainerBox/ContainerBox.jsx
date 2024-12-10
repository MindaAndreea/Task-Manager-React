import { useEffect, useState } from "react";
import "./ContainerBox.css";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";
import TaskCard from "../TaskCard/TaskCard";
import NoTasks from "../NoTasks/NoTasks";
import Modal from "../Modal/Modal";
import ControlPanel from "../ControlPanel/ControlPanel";
import { UsingTaskContext } from "../../context/TaskContext";

const ContainerBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { taskList, setTaskList, activeStatus } = UsingTaskContext();

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

  // console.log(taskList);

  const setFilteredTasks = () => {
    if (activeStatus === "All Tasks") {
      return taskList;
    }
    const filterList = taskList.filter(
      (task) => task.taskStatus === activeStatus
    );
    return filterList;
  };

  const filteredTasks = setFilteredTasks();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="container-box">
      <ControlPanel onClickFunction={openModal} />
      {taskList.length > 0 ? (
        <div className="tasks">
          {filteredTasks.map((task, index) => (
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
