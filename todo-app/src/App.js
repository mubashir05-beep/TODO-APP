import Todo from "./components/Todo";
function App() {
  return (
    <div className="mainContainer">
      <h1>TODO LIST</h1>
      <div className="container">
        <div className="addTodo">
          <h1 className="Add New Todo"></h1>
          <Todo />
        </div>
        <div className="addedTodo">
          <h1>TODO'S</h1>
          <Todo />
        </div>
        <div className="doneTodo">
          <h1>Done</h1>
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
