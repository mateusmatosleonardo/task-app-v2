import { TaskProps } from "../../components/Task/types";

export type ITask = {
  tasks: TaskProps[];
  setTasks: (tasks: TaskProps[]) => void;
  numberOfTasks: number;
  setNumberOfTasks: (numberOfTasks: number) => void;
  getAllTasks: () => void;
}
