import { AxiosError, AxiosResponse } from "axios";
import { createContext, useState } from "react";
import { TaskProps } from "../../components/Task/types";
import { api } from "../../utils/api";
import { TaskContextProps, } from "./TaskContextProps";
import { ITask } from "./types";

export const TaskContext = createContext<ITask>({} as ITask);

export const TaskProvider = ({ children }: TaskContextProps) => {

  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [numberOfTasks, setNumberOfTasks] = useState<number>(1);
  const [msgInitial, setMsgInitial] = useState<string>('');

  function getAllTasks() {
    api
      .get('/api/task')
      .then((response: AxiosResponse) => {
        setTasks(response.data);
        console.log(response.data);
      })
      .catch(error => console.log(error));
  };

  return (
    <TaskContext.Provider
      value={{
        numberOfTasks,
        setNumberOfTasks,
        getAllTasks,
        tasks,
        setTasks
      }}>
      {children}
    </TaskContext.Provider>
  );

}