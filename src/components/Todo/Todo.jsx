import "./index.css";

const current = new Date();
const dateEl =
  current.getDate() +
  "-" +
  (current.getMonth() + 1) +
  "-" +
  current.getFullYear();
const timeEl = current.getHours() + ":" + current.getMinutes();

const DeleteButton = ({ onClick, children }) => {
  return (
    <button className="DeleteButton" onClick={onClick}>
      {children}
    </button>
  );
};

const Todo = ({ todo, onClick }) => {
  return (
    <div className="Todo">
      <li className="Todo__li">
        <input className="Todo__li--checkbox" type="checkbox" />
        <div className="checkbox"> {todo.task} </div>
        <span className="Todo__li--postDate">
          (added on {dateEl} at {timeEl})
        </span>
        <DeleteButton onClick={onClick}>X</DeleteButton>
      </li>
    </div>
  );
};

export default Todo;
