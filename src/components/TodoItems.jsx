import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ addItems, DeleteItem }) => {
  return (
    <div className={styles.itemsContainer}>
      {addItems.map((item) => (
        <TodoItem todoDate={item.dueDate} key={item.name} onDeleteItem={DeleteItem} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
