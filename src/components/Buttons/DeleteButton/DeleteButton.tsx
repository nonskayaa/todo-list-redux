import classes from "./DeleteButton.module.css";

import delete_img from "../../../assets/images/delete.png";

import { useDispatch } from "react-redux";
import { deleteTask } from "../../../features/taskManager/taskManagerSlice";

export default function DeleteButton({ taskId }: { taskId: number }) {
  const dispatch = useDispatch();

  return (
    <button
      className={classes.btn_delete}
      onClick={() => dispatch(deleteTask(taskId))}
    >
      <img src={delete_img} className={classes.btn_delete__icon} alt="delete" />
    </button>
  );
}
