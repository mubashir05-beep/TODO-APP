function Todo() {
  return (
    <div className="container">
      <textarea className="name"></textarea>
      <div className="buttonContainer">
        <button className="removeItem">Delete</button>
        <button className="newItem">Add</button>
      </div>
    </div>
  );
} 

//Props is a parameter in TODO component Function 
//The Parameter will work in Key/Value Pair
//<Todo text="Hello!"/> in App.js
//Todo(props){<textarea className="name">{props.text}</textarea>}
export default Todo;
