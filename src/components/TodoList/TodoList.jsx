import { useReducer } from "react";
import "./index.css";
import Todo from "../Todo";
import Input from "../Input";

let stateInitialValue = {
  list: [],
  counter: 1,
};

function reducer(state, action) {
  let { list, counter } = state;
  let { type, payload } = action;

  switch (type) {
    case "Add":
      {
        let id = counter;
        counter++;
        list = [...list, { ...task, id }];
      }
      break;

    case "Delete":
      {
        list = list.filter((task) => task.id != payload);
      }
      break;

    default:
  }

  return {
    ...state,
    list,
    counter,
  };
}

let task = {};

const AddButton = ({ onClick, children }) => {
  return (
    <button className="AddButton" onClick={onClick}>
      {children}
    </button>
  );
};

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, stateInitialValue);

  const addTasks = () => {
    dispatch({ type: "Add" });
  };

  const deleteTasks = (id) => {
    dispatch({ type: "Delete", payload: id });
  };

  const handleInputChange = (e) => {
    task[e.target.name] = e.target.value;
  };

  return (
    <div className="TodoList">
      <div className="TodoList__input">
        <Input onChange={handleInputChange} />
        <AddButton onClick={addTasks}>ADD TASK!</AddButton>
      </div>
      <div className="TodoList__taskList">
        <ul>
          {state.list.reverse().map((todo, i) => {
            let { id } = todo;
            return <Todo key={i} todo={todo} onClick={() => deleteTasks(id)} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
