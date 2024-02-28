import classes from "./TaskItem.module.css";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import CheckButton from "../Buttons/CheckButton/CheckButton";
import { Task } from "../../features/taskManager/taskManagerSlice";
import classNames from "classnames";

export default function TaskItem({ task }: { task: Task }) {
  return (
    <li className={classes.task_list__item}>
      <div className={classes.task__left_side}>
        <CheckButton task={task} />
        <h5
          className={
            task.checked
              ? classNames(classes.task__title, classes.task__title__done)
              : classes.task__title
          }
        >
          {task.name}
        </h5>
      </div>
      <DeleteButton taskId={task.id} />
    </li>
  );
}
