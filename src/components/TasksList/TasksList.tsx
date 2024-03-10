import classes from "./TasksList.module.css";
import ClearAllButton from "../Buttons/ClearAllButton/ClearAllButton";
import TaskItem from "../TaskItem/TaskItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import sad_emoji from "../../assets/images/emoji_sad.png";

export default function TasksList() {
  const tasks = useSelector((state: RootState) => state.taskManager.items);

  return (
    <ul className={classes.task_list}>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}

      {tasks.length > 0 ? (
        <ClearAllButton />
      ) : (
        <li className={classes.task_list__item_empty}>
          <p className={classes.item_empty__title}>
            Пока у тебя <br /> нет задачек :(
          </p>
          <img src={sad_emoji} alt="" className={classes.item_empty__emoji} />
        </li>
      )}
    </ul>
  );
}
