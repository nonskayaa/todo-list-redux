import classes from "./TodoForm.module.css";
import { useDispatch } from "react-redux";
import { addNewTask } from "../../features/taskManager/taskManagerSlice";
import { useState } from "react";

export default function TodoForm() {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  return (
    <form className={classes.todo_list__form}>
      <div className={classes.todo_list__input_container}>
        <input
          type="text"
          className={classes.todo_list__input_box}
          placeholder="добавь новую задачку, ну добавь ну..."
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          className={classes.todo_list__btn}
          type="button"
          onClick={() => {
            dispatch(addNewTask(taskName));
          }}
        >
          тык
        </button>
      </div>
    </form>
  );
}
