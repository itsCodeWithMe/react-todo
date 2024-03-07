function AddTodo({ addingTodo, nameVal, dateVal }) {


  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" onChange={() => {
            let value = event.target.value;
            nameVal(value);
          }} />
        </div>
        <div className="col-4">
          <input type="date" value={nameVal.dueDate} onChange={() => {
            let value = event.target.value;
            dateVal(value);
          }} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={addingTodo}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
