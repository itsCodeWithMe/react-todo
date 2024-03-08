import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import ErrorMessage from "./components/ErrorMessage";
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


  const [addItems, setaddItems] = useState([]);

  const Adder = (nameVal, dateVal) => {
    const items = { name: nameVal, dueDate: dateVal };
    setaddItems([...addItems, items]);
  }

  const DeleteItem = (itemName) => {
    const item = addItems.filter(item => item.name !== itemName);
    setaddItems(item);
  }


  return (
    <center className="todo-container">
      <AppName />
      <AddTodo addingTodo={Adder} />
      {!addItems.length && <ErrorMessage></ErrorMessage>}
      <TodoItems addItems={addItems} DeleteItem={DeleteItem} ></TodoItems>
    </center>
  );
}

export default App;
