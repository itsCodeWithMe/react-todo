import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  // const todoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Like this video",
  //     dueDate: "right now",
  //   },
  // ];


  const [addItems, setaddItems] = useState([{
    name: "Buy Milk",
    dueDate: "4/10/2023",
  }],);

  const Adder = (event) => {
    let Item = nameVal;

  }
  const nameVal = (value) => {
    return value;
  }
  const dateVal = (value) => {
    return value;
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo addingTodo={Adder} nameVal={nameVal} dateVal={dateVal} />
      <TodoItems addItems={addItems} ></TodoItems>
    </center>
  );
}

export default App;
