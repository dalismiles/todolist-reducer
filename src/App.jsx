import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1> to Do List </h1>
      <TodoList />
      <img
        className="App__img"
        src="https://cdn.dribbble.com/users/207059/screenshots/1837145/media/ea09482a09b2dc0742aede6c9c075aa0.gif"
        alt="Cool-Guy-Walking"
      />
      <h6>
        suuuuuper cool gif created by{" "}
        <a href="https://dribbble.com/shots/1837145-Cool-Guy-Walking-gif">
          STUDIO beatgram
        </a>
      </h6>
    </div>
  );
}

export default App;
