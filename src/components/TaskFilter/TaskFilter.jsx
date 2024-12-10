import "./TaskFilter.css";
import FilterItem from "../FilterItem/FilterItem";
import { UsingTaskContext } from "../../context/TaskContext";

const TaskFilter = () => {
  const filterStatus = [
    { name: "All Tasks", colorClass: "all-tasks" },
    { name: "Pending", colorClass: "pending" },
    { name: "In Progress", colorClass: "in-progress" },
    { name: "In Review", colorClass: "in-review" },
    { name: "Completed", colorClass: "completed" },
    { name: "Unassigned", colorClass: "unassigned" },
    { name: "Todo", colorClass: "todo" },
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
          status={item.name}
          count={getCountByStatus(item.name)}
          isActive={activeStatus === item.name}
          onStatusClick={() => setActiveStatus(item.name)}
          colorClass={item.colorClass}
        />
      ))}
    </div>
  );
};

export default TaskFilter;
