import { createContext, useState } from "react";
import { useFetch } from "../../hooks/task/useFetch";
import { TaskContextProps, } from "./TaskContextProps";
import { ITask } from "./types";

export const TaskContext = createContext<ITask>({} as ITask);

export const TaskProvider = ({ children }: TaskContextProps) => {

  const [numberOfTasks, setNumberOfTasks] = useState<number>(1);
  const [msgInitial, setMsgInitial] = useState<string>('');

  return (
    <TaskContext.Provider value={{ numberOfTasks, setNumberOfTasks }}>
      {children}
    </TaskContext.Provider>
  );

}