import Badge from "../Badge/Badge";
import "./TaskCard.css";

const TaskCard = (props) => {
  return (
    <div className="taskContainer">
      <div className="top">
        <p className="name">{props.name}</p>
        <Badge status={props.status} />
      </div>
      <div className="content">{props.desc}</div>
      <div className="bottom">
        <p className="label">Due date</p>
        <p className="date">{props.date}</p>
      </div>
    </div>
  );
};

export default TaskCard;
