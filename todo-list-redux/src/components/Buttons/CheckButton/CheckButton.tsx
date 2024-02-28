import React from "react";
import classes from "./CheckButton.module.css";
import { useDispatch } from "react-redux";
import { checkTask } from "../../../features/taskManager/taskManagerSlice";
import { Task } from "../../../features/taskManager/taskManagerSlice";
import classNames from "classnames";
export default function CheckButton({ task }: { task: Task }) {
  const dispatch = useDispatch();
  return (
    <button
      className={
        task.checked
          ? classNames(classes.btn_check, classes.btn_check__done)
          : classes.btn_check
      }
      onClick={() => dispatch(checkTask(task.id))}
    ></button>
  );
}
