import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ addItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {addItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
