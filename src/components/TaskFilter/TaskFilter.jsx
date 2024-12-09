import "./TaskFilter.css";
import FilterItem from "../FilterItem/FilterItem";

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

  return (
    <div className="filter">
      {filterStatus.map((item, index) => (
        <FilterItem key={index} status={item} />
      ))}
    </div>
  );
};

export default TaskFilter;
