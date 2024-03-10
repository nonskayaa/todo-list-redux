import React from "react";
import classes from "./ClearAllButton.module.css";
import interested_emoji from "../../../assets/images/interested_emoji.png";
import { useDispatch } from "react-redux";
import { clearAllDoneTask } from "../../../features/taskManager/taskManagerSlice";

export default function ClearAllButton() {
  const dispatch = useDispatch();
  return (
    <button
      className={classes.todo_list__clear_btn}
      onClick={() => dispatch(clearAllDoneTask())}
    >
      убрать выполненные задачи
      <img
        src={interested_emoji}
        alt="interested emoji"
        className={classes.todo_list__emoji}
      />
    </button>
  );
}
