import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  name: string;
  checked: boolean;
}
export interface TasksState {
  items: Task[];
}

const initialState: TasksState = {
  items: [],
};
export const taskSlice = createSlice({
  name: "taskManager",
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: Date.now(),
        name: action.payload,
        checked: false,
      });
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((task) => task.id != action.payload);
    },
    checkTask: (state, action: PayloadAction<number>) => {
      const task = state.items.find((task) => task.id == action.payload);
      if (task) task.checked = !task.checked;
    },
    clearAllDoneTask: (state) => {
      state.items = state.items.filter((task) => task.checked !== true);
    },
  },
});

export const { addNewTask, deleteTask, checkTask, clearAllDoneTask } =
  taskSlice.actions;

export default taskSlice.reducer;
