import React from "react";
import classes from "./TodoList.module.css";
import TodoForm from "../TodoForm/TodoForm";
import TasksList from "../TasksList/TasksList";
import classNames from "classnames";

export default function TodoList() {
  return (
    <section className={classes.todo_list__container}>
      <h2
        className={classNames(
          classes.todo_list__title,
          classes.todo_list__title_top
        )}
      >
        Ту-дууу
      </h2>
      <h2
        className={classNames(
          classes.todo_list__title,
          classes.todo_list__title_bottom
        )}
      >
        лист
      </h2>
      <TodoForm />
      <TasksList />
    </section>
  );
}
