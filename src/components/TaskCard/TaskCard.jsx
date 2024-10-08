import "./TaskCard.css";

const TaskCard = (props) => {
  //   let type1 = "t-1";
  //   const status1 = "Todo";
  //   const desc = "Textul cardului de la mijloc";
  return (
    <div className="taskContainer">
      <div className="top">
        <p className="name">{props.name}</p>
        <p className="status">{props.status}</p>
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
