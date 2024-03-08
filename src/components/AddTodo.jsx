import { useState } from "react";

function AddTodo({ addingTodo }) {


  const [nameVal, setnameVal] = useState("");
  const [dateVal, setdateVal] = useState("");

  const valueFunction = () => {
    addingTodo(nameVal, dateVal);
    setdateVal("");
    setnameVal("");
  }
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={nameVal} onChange={(event) => {
            setnameVal(event.target.value);
          }} />
        </div>
        <div className="col-4">
          <input type="date" value={dateVal} onChange={(event) => {
            setdateVal(event.target.value);
          }} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={valueFunction}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
