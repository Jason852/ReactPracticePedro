import "./App.css";

export const Task = (props) => {
  return (
    <div className="task">
      <h1>{props.taskName}</h1>
      <button className="completeBtn">Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};
