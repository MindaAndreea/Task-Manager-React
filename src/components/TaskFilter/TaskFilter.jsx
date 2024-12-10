import "./TaskFilter.css";
import FilterItem from "../FilterItem/FilterItem";
import { UsingTaskContext } from "../../context/TaskContext";

const TaskFilter = () => {
  const filterStatus = [
    "All Tasks",
    "Pending",
    "In Progress",
    "In Review",
    "Completed",
    "Unassigned",
    "Todo",
  ];

  const { taskList, activeStatus, setActiveStatus } = UsingTaskContext();

  const getCountByStatus = (status) => {
    if (status === "All Tasks") {
      return taskList.length;
    }
    const filterList = taskList.filter((task) => task.taskStatus === status);
    return filterList.length;
  };

  return (
    <div className="filter">
      {filterStatus.map((item, index) => (
        <FilterItem
          key={index}
          status={item}
          count={getCountByStatus(item)}
          isActive={activeStatus === item}
          onStatusClick={() => {
            setActiveStatus(item);
          }}
        />
      ))}
    </div>
  );
};

export default TaskFilter;
