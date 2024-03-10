import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/taskManager/taskManagerSlice";

export const store = configureStore({
  reducer: {
    taskManager: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
